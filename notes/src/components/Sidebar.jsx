function Sidebar({
	notes,
	handleClick,
	onDeleteNote,
	activeNote,
	setActiveNote,
}) {
	return (
		<div className="app-sidebar">
			<div className="app-sidebar-header">
				<h1>Notes</h1>
				<button onClick={handleClick}>Add</button>
			</div>
			<div className="app-sidebar-notes">
				{notes.map((note) => {
					return (
						<div
							className={`app-sidebar-note ${
								note.id === activeNote && 'active'
							}`}
							key={note.id}
							onClick={() => setActiveNote(note.id)}
						>
							<div className="sidebar-note-title">
								<strong>{note.title}</strong>
								<button onClick={() => onDeleteNote(note.id)}>Delete</button>
							</div>
							<p>{note.body && note.body.substr(0, 100) + '...'}</p>
							<small className="note-meta">
								Last modified{' '}
								{new Date(note.lastModified).toLocaleDateString('en', {
									hour: '2-digit',
									minute: '2-digit',
								})}
							</small>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Sidebar;
