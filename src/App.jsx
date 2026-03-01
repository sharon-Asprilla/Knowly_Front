import NavBar from './Components/NavBar'
import './App.css'

function App() {
	return (
		<div>
			<NavBar />
			<main style={{ marginTop: '80px', minHeight: 'calc(100vh - 80px)' }}>
				{/* Aquí van las páginas */}
			</main>
		</div>
	)
}

export default App;