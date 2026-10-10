# Extended Checkbox Selection

A Tampermonkey userscript that adds range selection to checkboxes on web pages, similar to Shift+click in file lists. It works with native `<input type="checkbox">` elements and custom ARIA checkboxes (`role="checkbox"`).

## Installation

1. Install the [Tampermonkey](https://www.tampermonkey.net/) extension in your browser.
2. Open the Tampermonkey dashboard and choose **Create a new script** (the `+` tab).
3. Replace the template with the contents of [ExtendedCheckboxSelection.js](./ExtendedCheckboxSelection.js) and save (Ctrl+S).
4. Reload the page you want to use it on.

Currently the script has `@match *://*/*`, so it runs on every page (top-level frame only). To restrict it, edit the `@match` lines in the script header. When it loads, it writes a message to the browser console (DevTools) explaining how to use it.

## Usage

1. **Set the starting point.** Click a checkbox normally (mouse, touch, or Space). The script remembers which checkbox it was and the state it changed to (checked or unchecked).
2. **Select a range.** Hold **Ctrl** and click another checkbox, or focus it and press **Ctrl+Space**. Every checkbox between the two, in keyboard tab order, is set to the remembered state. The range includes the Ctrl+clicked checkbox but not the starting one. It works in either direction. The checkboxes are changed using click events, so the page's own click handlers still run.
3. **Extend or shrink.** Ctrl+click another checkbox. The starting point does not change, so the range is recalculated from it.
4. **Toggle.** Ctrl+click the same end checkbox again to toggle the whole range, including both ends, to the opposite of the starting checkbox's current state. Keep Ctrl+clicking it to keep toggling.
5. **Start over.** A normal click on any checkbox becomes the new starting point. Clicking non-checkbox controls has no effect. Reloading or navigating to a new page clears the starting point.

If you Ctrl+click a checkbox with no starting point recorded, or on the starting checkbox itself, it is treated as a normal click and becomes the starting point.

## Limitations

- On macOS, Ctrl+click is a right-click and does not trigger the feature. Ctrl+Space may be claimed by the operating system on some systems.
- Only Ctrl on its own is recognised (not combined with Shift, Alt, or Meta).
- Tab order is based on [ANDI](https://github.com/SSAgov/ANDI)'s definition of tabbable elements, ordered like the browser (positive `tabindex` first). Checkboxes that are not tabbable (for example `tabindex="-1"`, hidden, or a custom checkbox with no `tabindex`) cannot be part of a range. Disabled checkboxes are skipped.
- Mixed (`aria-checked="mixed"`) states cannot be propagated.
- Pages that update checkbox state asynchronously, or that react to `mousedown`/`pointerup` instead of `click`, may behave unexpectedly.
- Iframes and closed shadow roots are not handled.

See the comment block at the top of the script for the full list.

