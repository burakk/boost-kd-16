import './App.css'
import styles from './assets/styles/TicTacToe.module.css'

function App() {


  return (
    <div className={styles.TicTacToe}>
      <h1>Tic Tac Toe</h1>

      <div className={styles.Board} >
        <div className={styles.Tile}>
          x
        </div>

        <div className={styles.Tile}>
          x
        </div>

        <div className={styles.Tile}>
          x
        </div>

        <div className={styles.Tile}>
          x
        </div>

        <div className={styles.Tile}>
          x
        </div>

        <div className={styles.Tile}>
          x
        </div>

        <div className={styles.Tile}>
          x
        </div>

        <div className={styles.Tile}>
          x
        </div>

        <div className={styles.Tile}>
          x
        </div>



      </div>
    </div>
  )
}

export default App
