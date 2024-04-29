import React, { useState } from 'react';
import { questions } from './data';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

const QuestionsComponent = () => {
  const [editQuestionId, setEditQuestionId] = useState(null);
  const [newQuestion, setNewQuestion] = useState({
    questionNo: questions.length + 1,
    description: '',
    options: '',
    type: '',
  });
  const [openAddDialog, setOpenAddDialog] = useState(false);

  const handleAddQuestion = () => {
    questions.push({ ...newQuestion, id: questions.length + 1 });
    setNewQuestion({
      questionNo: questions.length + 1,
      description: '',
      options: '',
      type: '',
    });
    setOpenAddDialog(false);
  };

  const handleEditQuestion = (questionId) => {
    setEditQuestionId(questionId);
    const questionToEdit = questions.find((q) => q.id === questionId);
    setNewQuestion({ ...questionToEdit });
    setOpenAddDialog(true);
  };

  const handleDeleteQuestion = (questionId) => {
    const index = questions.findIndex((q) => q.id === questionId);
    if (index !== -1) {
      questions.splice(index, 1);
    }
  };

  return (
    <div>
        <h1>Questions and Categories</h1>
      <h2>Questions</h2>
      <Button variant="contained" onClick={() => setOpenAddDialog(true)}>
        Add Question
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="questions table">
          <TableHead>
            <TableRow>
              <TableCell>Question No</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Options</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {questions.map((question) => (
              <TableRow key={question.id}>
                <TableCell>{question.questionNo}</TableCell>
                <TableCell>{question.description}</TableCell>
                <TableCell>{question.options}</TableCell>
                <TableCell>{question.type}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() => handleEditQuestion(question.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() => handleDeleteQuestion(question.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openAddDialog} onClose={() => setOpenAddDialog(false)}>
        <DialogTitle>Add/Edit Question</DialogTitle>
        <DialogContent>
          <TextField
            label="Description"
            value={newQuestion.description}
            onChange={(e) => setNewQuestion({ ...newQuestion, description: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Options"
            value={newQuestion.options}
            onChange={(e) => setNewQuestion({ ...newQuestion, options: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Type"
            value={newQuestion.type}
            onChange={(e) => setNewQuestion({ ...newQuestion, type: e.target.value })}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAddDialog(false)}>Cancel</Button>
          <Button onClick={handleAddQuestion} color="primary">
            {editQuestionId ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default QuestionsComponent;
