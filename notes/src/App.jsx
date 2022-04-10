import React, { useState } from 'react';
import uuid from 'react-uuid';
import './App.css';

import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
	const [notes, setNotes] = useState([]);
	const [activeNote, setActiveNote] = useState(false);

	const handleClick = () => {
		console.log('hi');

		const newNote = {
			id: uuid(),
			title: 'Untitled Note',
			body: '',
			lastModified: Date.now(),
		};

		setNotes([newNote, ...notes]);

		console.log(notes);
	};

	const onDeleteNote = (idToDelete) => {
		setNotes(notes.filter((note) => note.id !== idToDelete));
	};

	return (
		<div className="App">
			<Sidebar
				notes={notes}
				handleClick={handleClick}
				onDeleteNote={onDeleteNote}
				activeNote={activeNote}
				setActiveNote={setActiveNote}
			/>
			<Main />
		</div>
	);
}

export default App;
