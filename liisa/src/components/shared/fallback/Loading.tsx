import "./Loading.css";

interface LoadingProps {
  message?: string;
  extraClass?: string;
}

const Loading = ({ message = "Ladataan...", extraClass }: LoadingProps) => {
  return (
    <div className={`loading-component ${extraClass || ""}`}>
      <div className="loading-message">
        <div className="spinner" />
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Loading;
