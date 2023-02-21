import React from 'react';

export function searchbarHandler(
  dispatcher: React.Dispatch<React.SetStateAction<string>>,
  e: React.ChangeEvent<HTMLInputElement>
) {
  e.preventDefault();
  const input = e.currentTarget as HTMLInputElement;
  dispatcher(input.value);
}

export function clearSearchInput(
  searchBar: HTMLInputElement,
  e: React.MouseEvent | React.TouchEvent
) {
  e.preventDefault();
  searchBar.value = '';
}
