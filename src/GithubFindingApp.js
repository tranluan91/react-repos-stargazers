import React from 'react';
import SearchForm from './components/SearchForm';
import SearchResult from './components/SearchResult';
import './index.css';

export default function GithubFindingApp() {
  return (
    <div className="github">
      <h3>Find repos list with exactly Github name</h3>
      <SearchForm></SearchForm>
      <SearchResult></SearchResult>
    </div>
  );
}
