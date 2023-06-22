# JSONFeedSorter

The JSONFeedSorter is a JavaScript module that accepts and sorts JSON feeds of data based on customizable criteria. This repository also includes a sample implementation for rendering and displaying branches from the sorted data.

## Usage

1. Include the `json-feed-sorter.js` file in your project.

```html
<script src="json-feed-sorter.js"></script>
```

2. Create an HTML container element where you want to display the branches.

```html
<div class="branch-container"></div>
```

3. Create a button element for toggling the display of branches.

```html
<button class="see-all-branch-button">+ See All</button>
```

4. Initialize the sorting and rendering of branches by calling the `list_10_branch()` function.

```javascript
list_10_branch();
```

5. Customize the sorting criteria by modifying the `DATA.sort()` method in the provided code.

```javascript
DATA.sort((a, b) => a.branch_state.localeCompare(b.branch_state));
```

6. Customize the rendering of branch elements by modifying the `renderBranch()` function in the provided code.

```javascript
function renderBranch(item) {
  // Customize branch element rendering
}
```

7. Customize the behavior of the "See All" button by modifying the `list_10_branch()` and `list_all_branch()` functions in the provided code.

8. Test and run your project to see the sorted and rendered branches.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

Please note that this README assumes that you have a basic understanding of HTML, CSS, and JavaScript, and have set up your project accordingly. Make sure to adjust the code and instructions to fit your specific project structure and requirements.
