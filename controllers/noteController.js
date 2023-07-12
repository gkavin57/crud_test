const Note = require("../models/note");

const fetchNotes = async (req, res) => {
  //find the notes
  const notes = await Note.find();

  //Response with them
  res.json({ notes });
};

const fetchNote = async (req, res) => {
  //Get id of url
  const noteId = req.params.id;

  //Find the note using that id
  const note = await Note.findById(noteId);

  //Respond with them
  res.json({ note });
};

const createNote = async (req, res) => {
  //get the data of request body
  const { title, body } = req.body;
  // const title = req.body.title;
  // const body = req.body.body;

  //Create the note with it

  const note = await Note.create({
    title,
    body,
  });

  //respond with the new note
  res.json({ note });
};

const updateNote = async (req, res) => {
  //get the id of url
  const noteId = req.params.id;

  //get the data from req.body
  const { title, body } = req.body;
  // const title = req.body.title;
  // const body = req.body.body;

  //find and update the record
  await Note.findByIdAndUpdate(noteId, {
    title,
    body,
  });

  //find updated note
  const note = await Note.findById(noteId);
  //respond with them
  res.json({ note });
};

const deleteNote = async (req, res) => {
  //get id or url

  const noteId = req.params.id;
  //Delete the record
  await Note.deleteOne({
    _id: noteId,
  });

  //Respond
  res.json({ success: "Record Deleted" });
};

module.exports = {
  fetchNotes,
  createNote,
  fetchNote,
  updateNote,
  deleteNote,
};
