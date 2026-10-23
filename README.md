# Extended Checkbox Selection

A Tampermonkey userscript that adds range selection to checkboxes on web pages, similar to Shift+click in file lists. It works with native `<input type="checkbox">` elements and custom ARIA checkboxes (`role="checkbox"`).

## Installation

1. Install the [Tampermonkey](https://www.tampermonkey.net/) extension in your browser.
2. Go to **Tampermonkey** > **Dashboard** and select the **Utilities** tab.
3. Paste [https://raw.githubusercontent.com/OwenEdwards-LevelAccess/ExtendedCheckboxSelection/main/ExtendedCheckboxSelection.js](https://raw.githubusercontent.com/OwenEdwards-LevelAccess/ExtendedCheckboxSelection/main/ExtendedCheckboxSelection.js) into the **Import from URL** field and click the **Install** button.
4. When prompted by Tampermonkey, confirm the installation.
5. Reload any web page you want to use it on.

The script is configured with `@updateURL` and will automatically receive updates from the GitHub repository.

Currently the script has `@match *://*/*`, so it runs on every page (top-level frame only). To restrict it, edit the `@match` lines in the script header. When it loads, it writes a message to the browser console (DevTools) explaining how to use it.

## Usage

The modifier key is **Ctrl** on Windows/Linux and **Option (⌥)** on macOS (Ctrl+click is a right-click on macOS, so it can't be used there). The steps below say "Ctrl"; substitute Option on a Mac.

1. **Set the starting point.** Click a checkbox normally (mouse, touch, or Space). The script remembers which checkbox it was and the state it changed to (checked or unchecked).
2. **Select a range.** Hold **Ctrl** and click another checkbox, or focus it and press **Ctrl+Space**. The script finds checkboxes between the two in keyboard tab order and filters them by drawing the smallest axis-aligned rectangle that encloses the clickable areas (union of the checkbox and any visible label) of both the first and second checkboxes. Every checkbox in the tab order whose clickable area intersects that rectangle (with a 3-pixel buffer) is set to the remembered state. The range includes the Ctrl+clicked checkbox but not the starting one. It works in either direction. The checkboxes are changed using click events, so the page's own click handlers still run.
3. **Extend or shrink.** Ctrl+click another checkbox. The starting point does not change, so the range is recalculated from it.
4. **Toggle.** Ctrl+click the same end checkbox again to toggle the whole range, including both ends, to the opposite of the starting checkbox's current state. Keep Ctrl+clicking it to keep toggling.
5. **Start over.** A normal click on any checkbox becomes the new starting point. Clicking non-checkbox controls has no effect. Reloading or navigating to a new page clears the starting point.

If you Ctrl+click a checkbox with no starting point recorded, or on the starting checkbox itself, it is treated as a normal click and becomes the starting point.

### Visible demo mode

Hold **Shift** together with Ctrl (or Option) when you click or press Space. It does the same range selection, and also shows a visible highlight of the rectangle used for the geometric filter. The rectangle appears on mouse down / key down and disappears on mouse up / Space release.

## Sandbox

There's a "sandbox" web page where you can try this feature out (you don't even need to install the userscript into TamperMonkey - the page loads the feature itself).

[Extended Checkbox Selection - Table Test](https://html-preview.github.io/?url=https://github.com/OwenEdwards-LevelAccess/ExtendedCheckboxSelection/blob/main/test_table.html)

## Limitations

- On macOS only Option is recognised (Ctrl is not), and Option+Space may be claimed by other tools. On Windows/Linux, Ctrl+Space may be claimed by the operating system (for example input-source switching).
- Only the modifier on its own is recognised (not combined with other modifiers), except Shift + the modifier, which activates the visible demo mode described above.
- Tab order is based on [ANDI](https://github.com/SSAgov/ANDI)'s definition of tabbable elements, ordered like the browser (positive `tabindex` first). Checkboxes that are not tabbable (for example `tabindex="-1"`, hidden, or a custom checkbox with no `tabindex`) cannot be part of a range. Disabled checkboxes are skipped.
- Geometric rectangle filtering calculates coordinates in the current viewport at the moment of the Ctrl+click. Checkboxes in separate independently-scrolled containers or columns that do not intersect the rectangle enclosing both endpoints are excluded.
- Rectangular selection works as expected only when the two reference checkboxes are at opposite top-left and bottom-right corners (in either order). Because only checkboxes between them in tab order are considered, selecting the top-right and bottom-left corners (in either order) misses checkboxes in the rectangle that fall outside that tab-order range.
- Mixed (`aria-checked="mixed"`) states cannot be propagated.
- Pages that update checkbox state asynchronously, or that react to `mousedown`/`pointerup` instead of `click`, may behave unexpectedly.
- Iframes and closed shadow roots are not handled.

See the comment block at the top of the script for the full list.

