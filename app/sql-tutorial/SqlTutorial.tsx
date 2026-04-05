"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import {
  Play,
  RotateCcw,
  Lightbulb,
  ChevronRight,
  ChevronLeft,
  Database,
  CheckCircle2,
  XCircle,
  BookOpen,
  Table2,
  Terminal,
  Info,
} from "lucide-react";

// ─── Database schema & seed data ────────────────────────────────────────────

const SCHEMA_SQL = `
CREATE TABLE customers (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT,
  city TEXT,
  age INTEGER,
  joined_date TEXT
);
INSERT INTO customers VALUES (1,'Alice Johnson','alice@example.com','New York',28,'2022-01-15');
INSERT INTO customers VALUES (2,'Bob Smith','bob@example.com','Los Angeles',35,'2022-03-20');
INSERT INTO customers VALUES (3,'Carol Davis','carol@example.com','Chicago',42,'2021-11-05');
INSERT INTO customers VALUES (4,'David Lee','david@example.com','New York',29,'2023-02-10');
INSERT INTO customers VALUES (5,'Eva Martinez','eva@example.com','Miami',31,'2022-07-22');
INSERT INTO customers VALUES (6,'Frank Wilson','frank@example.com','Chicago',55,'2021-05-18');
INSERT INTO customers VALUES (7,'Grace Chen','grace@example.com','Los Angeles',26,'2023-04-30');
INSERT INTO customers VALUES (8,'Henry Brown','henry@example.com','New York',38,'2022-09-14');
INSERT INTO customers VALUES (9,'Iris Taylor','iris@example.com','Miami',22,'2023-08-01');
INSERT INTO customers VALUES (10,'Jack Anderson','jack@example.com','Chicago',47,'2021-12-25');

CREATE TABLE products (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT,
  price REAL,
  stock INTEGER
);
INSERT INTO products VALUES (1,'Laptop Pro','Electronics',1299.99,45);
INSERT INTO products VALUES (2,'Wireless Mouse','Electronics',29.99,200);
INSERT INTO products VALUES (3,'SQL Mastery Book','Books',49.99,150);
INSERT INTO products VALUES (4,'Coffee Mug','Kitchen',12.99,500);
INSERT INTO products VALUES (5,'Standing Desk','Furniture',599.99,30);
INSERT INTO products VALUES (6,'Mechanical Keyboard','Electronics',149.99,75);
INSERT INTO products VALUES (7,'Python Programming Book','Books',39.99,120);
INSERT INTO products VALUES (8,'Monitor 27in','Electronics',399.99,60);
INSERT INTO products VALUES (9,'Desk Lamp','Furniture',34.99,100);
INSERT INTO products VALUES (10,'Headphones','Electronics',199.99,85);

CREATE TABLE orders (
  id INTEGER PRIMARY KEY,
  customer_id INTEGER,
  order_date TEXT,
  total REAL,
  status TEXT,
  FOREIGN KEY (customer_id) REFERENCES customers(id)
);
INSERT INTO orders VALUES (1,1,'2024-01-05',1329.98,'delivered');
INSERT INTO orders VALUES (2,2,'2024-01-08',149.99,'delivered');
INSERT INTO orders VALUES (3,3,'2024-01-10',599.99,'processing');
INSERT INTO orders VALUES (4,1,'2024-01-15',49.99,'delivered');
INSERT INTO orders VALUES (5,5,'2024-01-20',399.99,'shipped');
INSERT INTO orders VALUES (6,4,'2024-01-22',229.98,'delivered');
INSERT INTO orders VALUES (7,7,'2024-02-01',12.99,'delivered');
INSERT INTO orders VALUES (8,2,'2024-02-05',1299.99,'processing');
INSERT INTO orders VALUES (9,8,'2024-02-10',199.99,'shipped');
INSERT INTO orders VALUES (10,10,'2024-02-15',89.98,'delivered');
`;

// ─── Lesson definitions ──────────────────────────────────────────────────────

interface Lesson {
  id: number;
  title: string;
  icon: string;
  concept: string;
  explanation: string[];
  syntax: string;
  starterQuery: string;
  hint: string;
  challenge: string;
  challengeHint: string;
}

const LESSONS: Lesson[] = [
  {
    id: 1,
    title: "Your First SELECT",
    icon: "🔍",
    concept: "SELECT — Reading Data",
    explanation: [
      "SQL (Structured Query Language) lets you talk to a database. The most fundamental operation is SELECT — it retrieves rows from a table.",
      "The * wildcard means 'all columns'. You can also name specific columns you want to see.",
      "Every SQL statement ends with a semicolon (;).",
    ],
    syntax: "SELECT column1, column2 FROM table_name;",
    starterQuery: "SELECT * FROM customers;",
    hint: "Try changing * to specific column names like name, city to see only those columns.",
    challenge: "Write a query that shows only the name and email of all customers.",
    challengeHint: "SELECT name, email FROM customers;",
  },
  {
    id: 2,
    title: "Filtering with WHERE",
    icon: "🎯",
    concept: "WHERE — Filtering Rows",
    explanation: [
      "WHERE lets you filter rows based on conditions. Only rows where the condition is TRUE are returned.",
      "You can compare with =, != (not equal), <, >, <=, >=.",
      "Text values go in single quotes. Numbers don't need quotes.",
      "Combine conditions with AND / OR.",
    ],
    syntax: "SELECT * FROM table WHERE condition;",
    starterQuery: "SELECT * FROM customers WHERE city = 'New York';",
    hint: "Try changing 'New York' to 'Chicago' or 'Miami', or filter by age > 30.",
    challenge: "Find all customers older than 30 who live in Chicago.",
    challengeHint: "SELECT * FROM customers WHERE age > 30 AND city = 'Chicago';",
  },
  {
    id: 3,
    title: "Sorting & Limiting",
    icon: "📊",
    concept: "ORDER BY & LIMIT",
    explanation: [
      "ORDER BY sorts your results by one or more columns. ASC = ascending (A→Z, 0→9), DESC = descending.",
      "LIMIT caps the number of rows returned — great for 'top 5' style queries.",
      "You can ORDER BY multiple columns: ORDER BY city ASC, age DESC.",
    ],
    syntax: "SELECT * FROM table ORDER BY column DESC LIMIT n;",
    starterQuery: "SELECT name, age FROM customers ORDER BY age DESC;",
    hint: "Add LIMIT 3 at the end to get only the top 3 results.",
    challenge: "Find the 5 most recently joined customers (use joined_date).",
    challengeHint: "SELECT name, joined_date FROM customers ORDER BY joined_date DESC LIMIT 5;",
  },
  {
    id: 4,
    title: "Aggregate Functions",
    icon: "🧮",
    concept: "COUNT, SUM, AVG, MIN, MAX",
    explanation: [
      "Aggregate functions compute a single value from many rows.",
      "COUNT(*) counts all rows. COUNT(column) counts non-NULL values.",
      "SUM, AVG, MIN, MAX work on numeric columns.",
      "Use AS to give your result a readable name (alias).",
    ],
    syntax: "SELECT COUNT(*), AVG(column), SUM(column) FROM table;",
    starterQuery: "SELECT COUNT(*) AS total_customers, AVG(age) AS avg_age, MIN(age) AS youngest, MAX(age) AS oldest FROM customers;",
    hint: "Try running aggregates on the products table — what's the average price? The most expensive product?",
    challenge: "Find the total stock value of all products (price × stock) and the cheapest product price.",
    challengeHint: "SELECT SUM(price * stock) AS total_stock_value, MIN(price) AS cheapest FROM products;",
  },
  {
    id: 5,
    title: "Grouping Data",
    icon: "📦",
    concept: "GROUP BY & HAVING",
    explanation: [
      "GROUP BY collapses rows with the same value into one group, so you can aggregate per group.",
      "After grouping, HAVING filters groups — like WHERE but for aggregated results.",
      "Every column in SELECT must either be in GROUP BY or inside an aggregate function.",
    ],
    syntax: "SELECT column, COUNT(*) FROM table GROUP BY column HAVING COUNT(*) > n;",
    starterQuery: "SELECT city, COUNT(*) AS customer_count FROM customers GROUP BY city ORDER BY customer_count DESC;",
    hint: "Add HAVING COUNT(*) > 2 to only show cities with more than 2 customers.",
    challenge: "Show each product category with its average price. Only include categories where the average price is above $100.",
    challengeHint: "SELECT category, AVG(price) AS avg_price FROM products GROUP BY category HAVING AVG(price) > 100;",
  },
  {
    id: 6,
    title: "Joining Tables",
    icon: "🔗",
    concept: "JOIN — Combining Tables",
    explanation: [
      "A JOIN combines rows from two tables where a condition matches — usually a foreign key.",
      "INNER JOIN (default) returns only rows that match in both tables.",
      "Use table.column notation to avoid ambiguity when column names overlap.",
      "You can join more than two tables by chaining multiple JOINs.",
    ],
    syntax: "SELECT a.col, b.col FROM a JOIN b ON a.id = b.a_id;",
    starterQuery: "SELECT customers.name, orders.order_date, orders.total, orders.status\nFROM customers\nJOIN orders ON customers.id = orders.customer_id\nORDER BY orders.order_date DESC;",
    hint: "Try filtering joined results: add WHERE orders.status = 'delivered' to see only delivered orders.",
    challenge: "Find the total amount spent by each customer. Show their name and total spent, sorted highest first.",
    challengeHint: "SELECT customers.name, SUM(orders.total) AS total_spent\nFROM customers\nJOIN orders ON customers.id = orders.customer_id\nGROUP BY customers.id, customers.name\nORDER BY total_spent DESC;",
  },
  {
    id: 7,
    title: "Modifying Data",
    icon: "✏️",
    concept: "INSERT, UPDATE, DELETE",
    explanation: [
      "INSERT adds new rows. You must supply values for all NOT NULL columns.",
      "UPDATE modifies existing rows. Always include WHERE — without it, every row is updated!",
      "DELETE removes rows. Same warning: always use WHERE unless you want to delete everything.",
      "Run a SELECT after modifying to verify your changes took effect.",
    ],
    syntax: "INSERT INTO t (col1) VALUES (val1);\nUPDATE t SET col = val WHERE ...;\nDELETE FROM t WHERE ...;",
    starterQuery: "-- 1. Insert a new customer\nINSERT INTO customers (id, name, email, city, age, joined_date)\nVALUES (11, 'Sam Rivera', 'sam@example.com', 'Seattle', 27, '2024-03-01');\n\n-- 2. Verify the insert\nSELECT * FROM customers WHERE id = 11;",
    hint: "After inserting, try: UPDATE customers SET city = 'Portland' WHERE id = 11; then SELECT to verify.",
    challenge: "Update Alice Johnson's city to 'Boston', then select her row to confirm the change.",
    challengeHint: "UPDATE customers SET city = 'Boston' WHERE name = 'Alice Johnson';\nSELECT * FROM customers WHERE name = 'Alice Johnson';",
  },
];

// ─── Schema reference panel data ────────────────────────────────────────────

const SCHEMA_REFERENCE = [
  {
    table: "customers",
    columns: ["id", "name", "email", "city", "age", "joined_date"],
  },
  {
    table: "products",
    columns: ["id", "name", "category", "price", "stock"],
  },
  {
    table: "orders",
    columns: ["id", "customer_id", "order_date", "total", "status"],
  },
];

// ─── Result types ────────────────────────────────────────────────────────────

interface QueryResult {
  columns: string[];
  rows: (string | number | null)[][];
  rowsAffected?: number;
}

// ─── Main component ──────────────────────────────────────────────────────────

export default function SqlTutorial() {
  const [db, setDb] = useState<unknown>(null);
  const [dbLoading, setDbLoading] = useState(true);
  const [dbError, setDbError] = useState<string | null>(null);

  const [currentLesson, setCurrentLesson] = useState(0);
  const [query, setQuery] = useState(LESSONS[0].starterQuery);
  const [result, setResult] = useState<QueryResult | null>(null);
  const [queryError, setQueryError] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  const [showHint, setShowHint] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showSchema, setShowSchema] = useState(false);
  const [completedLessons, setCompletedLessons] = useState<Set<number>>(new Set());

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // ── Initialise sql.js ──────────────────────────────────────────────────────
  const initDb = useCallback(async () => {
    try {
      setDbLoading(true);
      setDbError(null);
      const initSqlJs = (await import("sql.js")).default;
      const SQL = await initSqlJs({ locateFile: () => "/sql-wasm.wasm" });
      const database = new SQL.Database();
      database.run(SCHEMA_SQL);
      setDb(database);
    } catch (err) {
      setDbError(String(err));
    } finally {
      setDbLoading(false);
    }
  }, []);

  useEffect(() => {
    initDb();
  }, [initDb]);

  // ── Reset db to clean state ────────────────────────────────────────────────
  const resetDb = useCallback(async () => {
    if (!db) return;
    try {
      const initSqlJs = (await import("sql.js")).default;
      const SQL = await initSqlJs({ locateFile: () => "/sql-wasm.wasm" });
      const freshDb = new SQL.Database();
      freshDb.run(SCHEMA_SQL);
      setDb(freshDb);
      setResult(null);
      setQueryError(null);
    } catch (err) {
      setQueryError(String(err));
    }
  }, [db]);

  // ── Navigate between lessons ───────────────────────────────────────────────
  const goToLesson = useCallback(
    (index: number) => {
      setCurrentLesson(index);
      setQuery(LESSONS[index].starterQuery);
      setResult(null);
      setQueryError(null);
      setShowHint(false);
      setShowAnswer(false);
      // Reset db for lesson 7 (mutation lesson) so data is clean
      if (index === 6) resetDb();
    },
    [resetDb]
  );

  // ── Execute SQL ────────────────────────────────────────────────────────────
  const runQuery = useCallback(() => {
    if (!db || isRunning) return;
    setIsRunning(true);
    setQueryError(null);
    setResult(null);

    try {
      // Split multiple statements
      const statements = query
        .split(";")
        .map((s) => s.replace(/--[^\n]*/g, "").trim())
        .filter(Boolean);

      let lastResult: QueryResult | null = null;
      let totalAffected = 0;

      for (const stmt of statements) {
        const upper = stmt.toUpperCase().trimStart();
        const isSelect = upper.startsWith("SELECT") || upper.startsWith("WITH");

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const dbAny = db as any;

        if (isSelect) {
          const rows = dbAny.exec(stmt);
          if (rows.length > 0) {
            lastResult = {
              columns: rows[0].columns,
              rows: rows[0].values,
            };
          } else {
            lastResult = { columns: [], rows: [] };
          }
        } else {
          dbAny.run(stmt);
          totalAffected++;
        }
      }

      if (!lastResult && totalAffected > 0) {
        lastResult = {
          columns: ["Result"],
          rows: [[`${totalAffected} statement(s) executed successfully`]],
          rowsAffected: totalAffected,
        };
      }

      setResult(lastResult);
      setCompletedLessons((prev) => new Set([...prev, currentLesson]));
    } catch (err) {
      setQueryError(String(err).replace("Error: ", ""));
    } finally {
      setIsRunning(false);
    }
  }, [db, query, isRunning, currentLesson]);

  // ── Keyboard shortcut Ctrl/Cmd+Enter ──────────────────────────────────────
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        runQuery();
      }
      // Tab inserts spaces
      if (e.key === "Tab") {
        e.preventDefault();
        const ta = textareaRef.current;
        if (!ta) return;
        const start = ta.selectionStart;
        const end = ta.selectionEnd;
        const newVal = query.substring(0, start) + "  " + query.substring(end);
        setQuery(newVal);
        requestAnimationFrame(() => {
          ta.selectionStart = ta.selectionEnd = start + 2;
        });
      }
    },
    [runQuery, query]
  );

  const lesson = LESSONS[currentLesson];
  const progress = Math.round((completedLessons.size / LESSONS.length) * 100);

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col">
      {/* ── Top bar ── */}
      <header className="border-b border-[var(--border)] bg-[var(--card)] px-4 py-3 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <Database className="w-5 h-5 text-[var(--primary)]" />
          <span className="font-semibold text-sm tracking-wide">SQL Interactive Tutorial</span>
          {dbLoading && (
            <span className="text-xs text-[var(--muted-foreground)] animate-pulse">
              Loading database…
            </span>
          )}
          {!dbLoading && !dbError && (
            <span className="text-xs text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
              SQLite ready
            </span>
          )}
        </div>
        {/* Progress */}
        <div className="hidden sm:flex items-center gap-3">
          <span className="text-xs text-[var(--muted-foreground)]">
            {completedLessons.size}/{LESSONS.length} lessons run
          </span>
          <div className="w-28 h-1.5 rounded-full bg-[var(--muted)] overflow-hidden">
            <div
              className="h-full rounded-full bg-[var(--primary)] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* ── Sidebar — lesson list ── */}
        <aside className="hidden lg:flex flex-col w-56 border-r border-[var(--border)] bg-[var(--card)] shrink-0">
          <div className="p-3 border-b border-[var(--border)]">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)]">
              Lessons
            </p>
          </div>
          <nav className="flex-1 overflow-y-auto py-2">
            {LESSONS.map((l, i) => (
              <button
                key={l.id}
                onClick={() => goToLesson(i)}
                className={`w-full text-left px-3 py-2.5 flex items-center gap-2.5 text-sm transition-colors rounded-none
                  ${currentLesson === i
                    ? "bg-[var(--primary)]/20 text-[var(--primary)] font-medium"
                    : "text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
                  }`}
              >
                <span className="text-base leading-none">{l.icon}</span>
                <span className="truncate">{l.title}</span>
                {completedLessons.has(i) && (
                  <CheckCircle2 className="w-3.5 h-3.5 ml-auto shrink-0 text-emerald-400" />
                )}
              </button>
            ))}
          </nav>

          {/* Schema reference toggle */}
          <div className="border-t border-[var(--border)] p-2">
            <button
              onClick={() => setShowSchema((v) => !v)}
              className="w-full flex items-center gap-2 px-2 py-1.5 text-xs rounded text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
            >
              <Table2 className="w-3.5 h-3.5" />
              Schema Reference
            </button>
          </div>
        </aside>

        {/* ── Main content ── */}
        <main className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto">
            <div className="max-w-4xl mx-auto p-4 lg:p-6 space-y-5">

              {/* DB error */}
              {dbError && (
                <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 flex gap-3">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-red-300 text-sm">Failed to load database</p>
                    <p className="text-xs text-red-400 mt-1">{dbError}</p>
                    <button
                      onClick={initDb}
                      className="mt-2 text-xs underline text-red-300 hover:text-red-200"
                    >
                      Retry
                    </button>
                  </div>
                </div>
              )}

              {/* Lesson header */}
              <div>
                <div className="flex items-center gap-2 text-xs text-[var(--muted-foreground)] mb-2">
                  <BookOpen className="w-3.5 h-3.5" />
                  Lesson {lesson.id} of {LESSONS.length}
                </div>
                <h1 className="text-2xl font-bold flex items-center gap-3">
                  <span>{lesson.icon}</span>
                  <span className="text-gradient">{lesson.title}</span>
                </h1>
                <p className="text-sm text-[var(--primary)] font-medium mt-1">{lesson.concept}</p>
              </div>

              {/* Explanation */}
              <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 space-y-2">
                {lesson.explanation.map((line, i) => (
                  <p key={i} className="text-sm text-[var(--foreground)]/80 leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>

              {/* Syntax box */}
              <div className="rounded-lg border border-[var(--primary)]/30 bg-[var(--primary)]/5 p-3">
                <p className="text-xs text-[var(--primary)] font-semibold uppercase tracking-widest mb-1.5">
                  Syntax
                </p>
                <pre className="text-sm font-mono text-[var(--foreground)]/90 whitespace-pre-wrap">
                  {lesson.syntax}
                </pre>
              </div>

              {/* Challenge card */}
              <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-4">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-widest text-amber-400">
                      Challenge
                    </p>
                    <p className="text-sm text-[var(--foreground)]/80">{lesson.challenge}</p>
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => { setShowHint((v) => !v); setShowAnswer(false); }}
                    className="text-xs px-2.5 py-1 rounded border border-amber-500/40 text-amber-400 hover:bg-amber-500/10 transition-colors flex items-center gap-1"
                  >
                    <Lightbulb className="w-3 h-3" />
                    {showHint ? "Hide hint" : "Hint"}
                  </button>
                  <button
                    onClick={() => { setShowAnswer((v) => !v); setShowHint(false); }}
                    className="text-xs px-2.5 py-1 rounded border border-[var(--border)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
                  >
                    {showAnswer ? "Hide answer" : "Show answer"}
                  </button>
                </div>
                {showHint && (
                  <p className="mt-2 text-xs text-amber-300/80 italic">{lesson.hint}</p>
                )}
                {showAnswer && (
                  <pre className="mt-2 text-xs font-mono bg-[var(--muted)] rounded p-2 text-emerald-300 whitespace-pre-wrap overflow-x-auto">
                    {lesson.challengeHint}
                  </pre>
                )}
              </div>

              {/* ── SQL Editor ── */}
              <div className="rounded-lg border border-[var(--border)] overflow-hidden">
                <div className="flex items-center justify-between px-3 py-2 bg-[var(--card)] border-b border-[var(--border)]">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-[var(--primary)]" />
                    <span className="text-xs font-semibold text-[var(--muted-foreground)]">
                      SQL Editor
                    </span>
                    <span className="text-xs text-[var(--muted-foreground)]/60 hidden sm:inline">
                      (Ctrl+Enter to run)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setQuery(lesson.starterQuery);
                        setResult(null);
                        setQueryError(null);
                      }}
                      title="Reset to starter query"
                      className="text-xs flex items-center gap-1 px-2 py-1 rounded text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
                    >
                      <RotateCcw className="w-3 h-3" />
                      Reset
                    </button>
                    {currentLesson === 6 && (
                      <button
                        onClick={resetDb}
                        title="Reset database to original data"
                        className="text-xs flex items-center gap-1 px-2 py-1 rounded text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
                      >
                        <Database className="w-3 h-3" />
                        Reset DB
                      </button>
                    )}
                    <button
                      onClick={runQuery}
                      disabled={dbLoading || !!dbError || isRunning}
                      className="flex items-center gap-1.5 px-3 py-1 rounded bg-[var(--primary)] text-[var(--primary-foreground)] text-xs font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                    >
                      <Play className="w-3 h-3" />
                      {isRunning ? "Running…" : "Run"}
                    </button>
                  </div>
                </div>
                <textarea
                  ref={textareaRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  spellCheck={false}
                  rows={Math.max(5, query.split("\n").length + 1)}
                  className="w-full p-4 font-mono text-sm bg-[oklch(0.04_0.02_270)] text-[var(--foreground)] resize-none focus:outline-none leading-relaxed"
                  placeholder="Write your SQL here…"
                />
              </div>

              {/* ── Results ── */}
              {queryError && (
                <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 flex gap-3">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-red-400 mb-1">Query Error</p>
                    <pre className="text-xs text-red-300 whitespace-pre-wrap font-mono">
                      {queryError}
                    </pre>
                  </div>
                </div>
              )}

              {result && !queryError && (
                <div className="rounded-lg border border-[var(--border)] overflow-hidden">
                  <div className="flex items-center justify-between px-3 py-2 bg-[var(--card)] border-b border-[var(--border)]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-xs font-semibold text-[var(--muted-foreground)]">
                        Results
                      </span>
                    </div>
                    <span className="text-xs text-[var(--muted-foreground)]">
                      {result.rows.length} row{result.rows.length !== 1 ? "s" : ""}
                    </span>
                  </div>
                  {result.columns.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-[var(--muted)]">
                            {result.columns.map((col) => (
                              <th
                                key={col}
                                className="text-left px-4 py-2 text-xs font-semibold text-[var(--primary)] uppercase tracking-wide whitespace-nowrap"
                              >
                                {col}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {result.rows.map((row, ri) => (
                            <tr
                              key={ri}
                              className={`border-t border-[var(--border)] ${ri % 2 === 1 ? "bg-[var(--muted)]/30" : ""}`}
                            >
                              {row.map((cell, ci) => (
                                <td
                                  key={ci}
                                  className="px-4 py-2 text-xs font-mono text-[var(--foreground)]/80 whitespace-nowrap"
                                >
                                  {cell === null ? (
                                    <span className="text-[var(--muted-foreground)] italic">NULL</span>
                                  ) : (
                                    String(cell)
                                  )}
                                </td>
                              ))}
                            </tr>
                          ))}
                          {result.rows.length === 0 && (
                            <tr>
                              <td
                                colSpan={result.columns.length}
                                className="px-4 py-6 text-center text-xs text-[var(--muted-foreground)] italic"
                              >
                                No rows returned
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p className="px-4 py-3 text-xs text-[var(--muted-foreground)] italic">
                      Query executed successfully. No rows to display.
                    </p>
                  )}
                </div>
              )}

              {/* ── Lesson navigation ── */}
              <div className="flex items-center justify-between pt-2 pb-6">
                <button
                  onClick={() => goToLesson(currentLesson - 1)}
                  disabled={currentLesson === 0}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border)] text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-[var(--primary)]/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </button>

                {/* Mobile lesson selector */}
                <div className="flex lg:hidden items-center gap-1">
                  {LESSONS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goToLesson(i)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        i === currentLesson
                          ? "bg-[var(--primary)] scale-125"
                          : completedLessons.has(i)
                          ? "bg-emerald-400"
                          : "bg-[var(--muted)]"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => goToLesson(currentLesson + 1)}
                  disabled={currentLesson === LESSONS.length - 1}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] text-sm font-medium hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
                >
                  Next lesson
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* ── Schema reference panel (overlay) ── */}
      {showSchema && (
        <div
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm flex items-end lg:items-center justify-center p-4"
          onClick={() => setShowSchema(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Table2 className="w-4 h-4 text-[var(--primary)]" />
                <h2 className="font-semibold text-sm">Schema Reference</h2>
              </div>
              <button
                onClick={() => setShowSchema(false)}
                className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] text-lg leading-none"
              >
                ×
              </button>
            </div>
            {SCHEMA_REFERENCE.map((t) => (
              <div key={t.table}>
                <p className="text-xs font-semibold text-[var(--primary)] mb-1.5 uppercase tracking-wide">
                  {t.table}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {t.columns.map((c) => (
                    <code
                      key={c}
                      className="text-xs px-2 py-0.5 rounded bg-[var(--muted)] text-[var(--foreground)]/80 font-mono"
                    >
                      {c}
                    </code>
                  ))}
                </div>
              </div>
            ))}
            <p className="text-xs text-[var(--muted-foreground)] italic">
              orders.customer_id → customers.id
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
