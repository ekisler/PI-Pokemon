import { default as styles } from "../../styles/Buttons.module.css";

export default function Refresh({ handleRefresh }) {
  return (
    <div>
      <button className={styles.homeBtn} onClick={() => handleRefresh()} />
    </div>
  );
}
