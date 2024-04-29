import { it, expect, describe } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react'; 
import Dashboard from '../src/Pages/maHomePage'; 

describe('Dashboard Component', () => {
  it('renders without crashing', () => {
    render(<Dashboard />);
    
  });

  it('displays the title "Student Feedback Management System"', () => {
    render(<Dashboard />);
    expect(screen.getByText('Student Feedback Management System')).toBeInTheDocument();
  });

  it('list is initially hidden', () => {
    render(<Dashboard />);
    expect(screen.queryByText('Feedback')).not.toBeInTheDocument();
  });
  
  it('list becomes hidden again when toggle button is clicked twice', async () => {
    render(<Dashboard />);
    await fireEvent.click(screen.getByText('☰'));
    await fireEvent.click(screen.getByText('☰'));
    expect(screen.queryByText('Feedback')).not.toBeInTheDocument();
  });
  
  



  
});
