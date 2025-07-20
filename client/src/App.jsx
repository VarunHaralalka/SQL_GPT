import styles from "./index.module.css";
import Logo from "./Logo";
import { useState } from "react";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const [ans, setAns] = useState("");
  const [explanation, setExplanation] = useState("");
  const [error, setError] = useState("");
  const onSubmit = async (data) => {
    setError("");
    try {
      const result = await generateQuery(data["query-description"]);
      const sqlQuery = result.sql;
      const explanation = result.explanation;
      setAns(sqlQuery);
      setExplanation(explanation);
    } catch (err) {
      setAns("");
      setExplanation("");
      setError("Server is busy or down. Please try again later.");
    }
  };
  const onError = (errors) => {
    console.log(errors);
  };
  const generateQuery = async (query) => {
    const result = await fetch("http://localhost:5500/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: query }),
    });
    if (!result.ok) throw new Error("Server error");
    const data = await result.json();
    console.log(data);
    return data.response;
  };
  const clear = () => {
    setAns("");
    setExplanation("");
    setError("");
    const textarea = document.querySelector(
      'textarea[name="query-description"]'
    );
    textarea.value = "";
    textarea.rows = 1;
    textarea.style.height = "50px";
  };
  return (
    <main className={styles.body}>
      <div className={styles.heading}>
        <Logo className={styles.icon} />
        <h3 className={styles.h3}>SQL GPT</h3>
      </div>
      <h2 className={styles.h2}>Generate SQL with AI</h2>
      <form onSubmit={handleSubmit(onSubmit, onError)} className={styles.form}>
        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
          <textarea
            name="query-description"
            placeholder="Describe your query.."
            className={styles.input}
            rows={1}
            style={{ resize: "none", overflow: "hidden" }}
            {...register("query-description", { required: true })}
            onInput={(e) => {
              e.target.style.height = "auto";
              e.target.style.height = e.target.scrollHeight + "px";
            }}
          />
          <button
            type="button"
            className={styles.clearButton}
            onClick={clear}
            aria-label="Clear"
          >
            &#10005;
          </button>
        </div>
        <input
          type="submit"
          value={isSubmitting ? "Generating..." : "Generate query"}
          className={styles.button}
          disabled={isSubmitting}
        />
      </form>
      {error && (
        <div
          style={{ color: "#d32f2f", marginTop: "12px", fontWeight: "bold" }}
        >
          {error}
        </div>
      )}
      <div className={styles.resultContainer}>
        {ans && (
          <div className={styles.resultBox}>
            <p className={styles.resultTitle}>SQL Query</p>
            <pre className={styles.pre}>{ans}</pre>
          </div>
        )}
        {explanation && (
          <div className={styles.resultBox}>
            <p className={styles.resultTitle}>Explanation</p>
            <pre className={styles.pre}>{explanation}</pre>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
