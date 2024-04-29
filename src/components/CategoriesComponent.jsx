import React, { useState } from 'react';
import { categories } from './data';
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

const CategoriesComponent = () => {
  const [editCategoryId, setEditCategoryId] = useState(null);
  const [newCategory, setNewCategory] = useState({ name: '', types: '' });
  const [openAddDialog, setOpenAddDialog] = useState(false);

  const handleAddCategory = () => {
    categories.push({ ...newCategory, id: categories.length + 1 });
    setNewCategory({ name: '', types: '' });
    setOpenAddDialog(false);
  };

  const handleEditCategory = (categoryId) => {
    setEditCategoryId(categoryId);
    const categoryToEdit = categories.find((c) => c.id === categoryId);
    setNewCategory({ ...categoryToEdit });
    setOpenAddDialog(true);
  };

  const handleDeleteCategory = (categoryId) => {
    const index = categories.findIndex((c) => c.id === categoryId);
    if (index !== -1) {
      categories.splice(index, 1);
    }
  };

  return (
    <div>
      
      <h2>Categories</h2>
      <Button variant="contained" onClick={() => setOpenAddDialog(true)}>
        Add Category
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="categories table">
          <TableHead>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell>Types</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category.id}>
                <TableCell>{category.name}</TableCell>
                <TableCell>{Array.isArray(category.types) ? category.types.join(", ") : "No types"}</TableCell>
                <TableCell>
                  <Button variant="contained" onClick={() => handleEditCategory(category.id)}>Edit</Button>
                  <Button variant="contained" color="error" onClick={() => handleDeleteCategory(category.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add/Edit Category Dialog */}
      <Dialog open={openAddDialog} onClose={() => setOpenAddDialog(false)}>
        <DialogTitle>{editCategoryId ? 'Edit Category' : 'Add Category'}</DialogTitle>
        <DialogContent>
          <TextField
            label="Category Name"
            value={newCategory.name}
            onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Category Types"
            value={newCategory.types}
            onChange={(e) => setNewCategory({ ...newCategory, types: e.target.value })}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAddDialog(false)}>Cancel</Button>
          <Button onClick={editCategoryId ? () => handleEditCategory(editCategoryId) : handleAddCategory} color="primary">
            {editCategoryId ? 'Save Changes' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CategoriesComponent;
