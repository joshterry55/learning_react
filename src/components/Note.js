import React from 'react'

class Note extends React.Component {
  constructor(props) {
    super(props);

    this.state = { edit: false }

    this.display = this.display.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
    this.edit = this.edit.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }

  display() {
    let note = this.props.note
    return(
      <div className="col s12 m4">
        <div className="card" style={{ backgroundColor: note.color }}>
          <div className="card-content white-text">
            <span className="card-title">{note.title}</span>
            <p> { note.body } </p>
            <i> {note.author }</i>
          </div>
          <div className="card-action">
            <button onClick={this.toggleEdit}>Edit</button>
            <button onClick={() => this.props.deleteNote(this.props.index)}>Delete</button>
          </div>
        </div>
      </div>
    )
  }

  toggleEdit() {
    this.setState({ edit: !this.state.edit })
  }

  handleEdit() {
    let editTitleValue = this.refs.editTitle.value
    let editBodyValue = this.refs.editBody.value
    let editAuthorValue = this.refs.editAuthor.value
    let editColorValue = this.refs.editColor.value
    this.props.editNote(this.props.index,
                        editTitleValue,
                        editBodyValue,
                        editAuthorValue,
                        editColorValue
                      )

    this.toggleEdit()
  }

  edit() {
    let note = this.props.note
    return(
      <div className="col s12 m4">
        <div className="card" style={{ backgroundColor: note.color }}>
          <div className="card-content white-text">
            <span className="card-title"></span>
              <label>Title</label>
              <input type='text' ref='editTitle' required defaultValue={note.title}/>
              <label>Body</label>
              <textarea ref='editBody' required defaultValue={note.body}></textarea>
              <label>Author</label>
              <input type='text' ref='editAuthor' required defaultValue={note.author}/>
              <label>Note Color</label>
              <input type='color' ref='editColor' required defaultValue={note.color}/>
          </div>
          <div className="card-action">
            <button onClick={this.toggleEdit}>Cancel</button>
            <button onClick={this.handleEdit}>Save</button>
          </div>
        </div>
      </div>
    )
  }

  render(){
    if(this.state.edit) {
      return(this.edit());
    } else {
      return(this.display())
    }
  }
}

export default Note
