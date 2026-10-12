// ==UserScript==
// @name         Extended Checkbox Selection
// @namespace    https://github.com/
// @version      0.6.0
// @description  Ctrl+click (Option+click on macOS), or Ctrl/Option+Space, on a checkbox sets every checkbox between it and the last normally-clicked checkbox (in tab order) to the state of that last normally-clicked checkbox.
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAHE0lEQVR42u2baWxcVxXHf+e+ZRZv46ZpaidKurC2Io0iQHxIIU3FUgL0k1OEoFUipLKoqoirQFXAmQ9BBJQAomIRapqCECRBAioqUIUUJAIURGklRPhAFZGQZOyotmNPZsbzlnv48GzHjrex61bzlLnS1Vgzb97o/O89y/v5XKGhoYI2diUCII1e3eRjQA196qzoewNq0mCiLGpEUSzAun5ty3j4cA7oWvSGlbgrGv6mlK+9R7oEUBVEdO0jZ2/3c50HVO02tVEONPlswbuJinEDjPui1itfLX17/T+aXQSZd+X3oxsfH7o1ir1TJtPRo/XxhkOAI2D8dqJwoiJa23H+Gz1/o++4w4ldcTMKMNdPTyOIaBhw0GQ6e2z11brGoWJDJV58ig11rBLo6MhwYFy/LY7ku6DCHX2ajh0wufXX9ZfaHJUzOO5a4hBEZEklBaqB8v47Mijo70/XyXnEMfqmwUO9Z5vVFeaN1F57LqOot2iQnDFcB0arlnveluHnD3dz7OFu7n17Rsp13DU58s0cBN15VamjjTqsEajWlU1rXL7z8U5iC44BIwKqRHh2iZTpro4pf4DiPdGqCDA7sM/eB6qzP4s18ZCje7pY352UDAd+U+a5f07QnTOU60v8QFGiptsBMw0MIrCTOcA1gueA1aurf7mqPPVQF++6xQfgpy/UOPDcFda0O8SqizrRpgHNBuODj4rjZbHBQh65VBRTdXPGBJUzF77V+2NQWU4l6i5mfBTDmnbh+5/qxhF48MgolbqScQVjYGjc8sTOdh54dw6Av54J+MKxcQr5JSrnyWAbj4/lEQ6YbKdDHICspHgUEEGynfTuHTIXD8tRBk66jbrDgr/oilCuWz5wZ5btb/W5+y0+T36ii8gm4oxULLvemePLOzsA+N9IzENHLqMojhFUG14Eq2pRVZLX5U0bVohrIzWN6rGiO1bNBSJVOjKG5/81wan/5Nj2Zp+dm7M8s6fAAz8YZesmj+99sgsRqIXKnqOXKY1ZCjkhajDZhaZWN8qPbFDOE4VglrMD1IBYVLcY429GrcGwekFQFTwXhiuW+58c4endBT62JctH78py7DPd3LbWpT2TOPijPxvnz68ErO0whI2kD0l8dOhQTwX4/GsJYj17h/ZJpm2L2hi0sbTdcBC0ChlXiK2w++nLs0SYGoefv8JP/lLlps4GjZ+TBk+6sD1JY8sat7jw34gybaiubhawdWRKSzuZ1zNuIsKR3QXu35II8KuXJtj/7BVubDdECxiv8RKrsoLcPVk/QPHWSPYO2lVPgzU3DDNW4qmsbzURwXeFTz8zxqVxS2dOeOz4OHl/wYivqKrne0F6KkERZUDNcFHKvf2DLxq/44O2NhKAeFMiCEr/8TEA2jKC68i1O1BQjcRv8zSo/vvc1q6zU2kvHU+D0wjMPK5htWqyBX+yFhRVEWOMFPKOFPKOOMaIJoFHZtaM4rd5iZ72MXZJzC4MkBIBimIZQC4evuklwsq9Ggd/Qpx6YpuiCrFNZrLyU3brpA4mRO3L0cTYRy4c6v0tA2o4IXGqHoYSEdRcKMoLwLb1+yobjA0z4k6oRgsFtTridmmofnTx4MHzULRpQGKLpMH9039dyOUHN4ELo0hmsdt10dtLXKLY1EYvLUAStOzaR87e7mc7vqbV4btDG+eU3KJMUGRIS684Qe++0b9rUP1KqShNzwTdeZkg6MYvDd4Wxd4fJdPeQ30cNU5DZVbCBHMfjkTet2Ffacf5orSYYDMzQTNn65+QeF1/qU3gvbY+piB+wgRFkIWnMSK1ELnvHVn50OacVymPqRHdenN/aeNUUE1NHXA9MUGzEBPkNTDB5P0GmWDzpsE3iAk2swCvNxNs4meB2UzwF5+9gV9+7gZyPtQjxUji95fKli/e17Z8JpgGAd5AJticAsxmgskj/RQTfLVsuWvD/Eww78m0i6RaAFXwnKtM8NmXJwCmmeAPHyzMYYLd+caBaNMLMJMJTuGwmSLc2evOYoI3dqyQCTajALZ+NXZfywR/PSnCqjHBZkyDLSbYYoItJthigi0m2GKCLSbYYoItJthigq0+wWbuE3QZULR8yaSbCa68TzD53t5SBZEV15mp7RNUxAhqFbZrWLO4WcMKSFyK+wST0lujGjacmHC8vCcqfhqZ4Ar7BJPrxc3h5ApZcTOOYk9eR32CV6mDcX2J62OnSod6ngKV5cSV1PcJznNzvU76BGeO7avbLp+KPsEWE3w9T40Vxfb2D/7OZAsJExTjTaVGa5UrdZ1mgknEn8MEw0kmePrie9Ztpg+bVFTNh8VaTLBBJjiRGGBVVYltMmfneqtJgeYEaWKCDR2dvfmJ6iYThFkoA4sxMR/X0fDc1wtn0nJ0dulD0OjK/rPTd9wh1Yen52KyxkcRTcsR+v8DNWoQURQbUhAAAAAASUVORK5CYII=
// @downloadURL  https://raw.githubusercontent.com/OwenEdwards-LevelAccess/ExtendedCheckboxSelection/main/ExtendedCheckboxSelection.js
// @updateURL    https://raw.githubusercontent.com/OwenEdwards-LevelAccess/ExtendedCheckboxSelection/main/ExtendedCheckboxSelection.js
// @match        *://*/*
// @run-at       document-start
// @noframes
// @grant        none
// ==/UserScript==

/*
 * MODIFIER KEY: Ctrl on Windows/Linux, Option on macOS. The rest of this comment says "Ctrl" for both.
 *
 * BEHAVIOR
 * - "Checkbox" = <input type="checkbox"> or any element with role="checkbox".
 * - A click (mouse, touch, or keyboard activation) on a checkbox WITHOUT Ctrl records that checkbox and the
 *   state it ended up in as the "initial checkbox". Recording is passive (listeners never stop or alter the
 *   event) and the state is read in a setTimeout(0) after the event has finished dispatching.
 * - A Ctrl+click (or Ctrl+Space while focused) on a different checkbox, when an initial checkbox is recorded:
 *   the event is cancelled (page handlers never see it), and every enabled checkbox in the tab order between
 *   the initial checkbox (excluded) and the clicked one (included) is put into the recorded state by calling
 *   .click() on each one that is not already in that state, so page click handlers still run.
 *   The initial checkbox is NOT changed by a Ctrl+click, so repeated Ctrl+clicks extend/shrink the range from
 *   the same anchor. Works in either direction (before or after the initial checkbox).
 * - A Ctrl+click is treated as a normal click (and recorded as a new initial checkbox) when: there is no
 *   recorded initial checkbox; the clicked checkbox IS the initial checkbox; the initial checkbox has been
 *   removed/hidden/made untabbable; the clicked checkbox is not in the tab order; or the recorded state is "mixed".
 * - Non-checkbox clicks are ignored. Reload / navigation clears the record (so does restoring from bfcache).
 *
 * TOGGLE EXTENSION
 * - After a Ctrl+click (or Ctrl+Space) has applied a range ending at checkbox S, another Ctrl+click on the same
 *   S toggles the whole range, now INCLUDING both the initial checkbox and S: every checkbox in it is set (via
 *   click events) to the opposite of the initial checkbox's current state. Each further Ctrl+click on S toggles
 *   again, flipping back and forth.
 * - After each toggle, the initial checkbox's resulting state becomes the recorded state, so a later Ctrl+click
 *   on a different checkbox T applies the initial checkbox's current state to the range up to T (T becomes the
 *   new "S"; the first Ctrl+click on T is a normal range application, a repeat on T toggles).
 * - "Same S" is broken by any normal (non-Ctrl) checkbox click, which also records a new initial checkbox, or
 *   by a Ctrl+click on a different checkbox. Clicks on non-checkbox controls do not affect it.
 *
 * TAB ORDER
 * Based on ANDI's definition of "tabbable" (andi.js :tabbable/:focusable, grab_tabindex): natively focusable
 * elements (a[href], area[href], button, input not hidden, select, textarea, iframe, summary, contenteditable)
 * that are not disabled, or any element with a numeric tabindex, excluding tabindex < 0 and elements that are
 * not visible (display:none / visibility:hidden) or inert. Unlike ANDI (which uses plain DOM order), the order
 * follows the browser: positive tabindex values ascending first (ties in DOM order), then everything else
 * in DOM order.
 *
 * LIMITATIONS
 * - Ctrl+click on macOS (Chrome/Safari/Firefox) is a right-click and fires "contextmenu" instead of "click",
 *   so on macOS (detected via navigator.userAgentData.platform / navigator.platform) the script uses Option
 *   (Alt) instead of Ctrl everywhere "Ctrl" is mentioned in this file (Option+click, Option+Space); Ctrl is not
 *   recognised there. Option+Space is reported with code "Space" (its key value is a non-breaking space), which
 *   is what the script checks; it may be claimed by some other macOS tools. iPadOS reports a Mac platform, so
 *   it uses Option as well. Touch-only devices have no modifier key. Ctrl+Space may be claimed by the OS/IME
 *   (e.g. input-source switching) on Windows/Linux.
 * - Only the platform's modifier alone is recognised; combined with other modifiers (incl. AltGr) it is a
 *   normal click.
 * - The script must run before page scripts to intercept reliably (@run-at document-start). A page that
 *   registered a window-level capture listener earlier, or that acts on mousedown/pointerdown/pointerup instead
 *   of click, can still react to a Ctrl+click on the target checkbox; only the "click" event (and, for
 *   Ctrl+Space, keydown/keypress/keyup plus keyboard-generated click) is suppressed.
 * - Custom (non-native) checkboxes are read via aria-checked ("true"/"false"). aria-checked="mixed" cannot be
 *   propagated: a mixed checkbox in the range is clicked once if the target is not "mixed" and its resulting
 *   state is not verified. Native indeterminate is ignored (the .checked value is used).
 * - A keyboard activation of a custom checkbox is detected from the Space key (the ARIA pattern). Enter is
 *   not treated as activation. A custom checkbox whose page script ignores Ctrl+Space and does not change
 *   state is not recorded.
 * - Programmatic (untrusted) clicks, including those made by this script, never update the recorded state.
 * - State is read after setTimeout(0); pages that update state later (async) may be recorded with a stale
 *   state. Likewise, applying the range calls click() synchronously and does not wait for async updates.
 * - Disabled (disabled / :disabled / aria-disabled="true" / aria-readonly="true") checkboxes in the range are
 *   skipped. Checkboxes that are not tabbable (e.g. tabindex="-1", hidden, or custom role="checkbox" without a
 *   tabindex) are not in the tab order, so they are never part of a range and cannot be an endpoint.
 * - Radio-group tab rules, <details> closed state, shadow-DOM tabindex scoping, and <slot> flattened order are
 *   not modelled; open shadow roots are searched (content is placed right after its host). Closed shadow
 *   roots and iframes are not searched (the script runs in the top-level frame only, @noframes).
 * - Single-page-app route changes do not clear the record (no page load occurs).
 * - Toggle limitations: the toggle target is read from the initial checkbox's live state; if the initial
 *   checkbox is disabled/readonly (so its state cannot change), or the page vetoes its change, repeated toggles
 *   keep applying the same target to the others instead of alternating. If the initial checkbox's state is
 *   "mixed" the Ctrl+click is treated as a normal click. If the user changes checkboxes in the range manually
 *   between toggles (without a normal checkbox click on a different one), the toggle still sets all of them
 *   uniformly. Tab order is recomputed on each Ctrl action, so DOM changes between toggles alter the range.
 * - jQuery-style plugins/frameworks that replace the checkbox element between clicks will invalidate the
 *   record (the removed element is detected via isConnected and treated as "no initial click").
 */

(function () {
  'use strict';

  // The modifier is Ctrl, except on macOS where Ctrl+click is a right-click, so Option (Alt) is used instead.
  const platform = (navigator.userAgentData && navigator.userAgentData.platform) || navigator.platform || '';
  const IS_MAC = /mac/i.test(platform);
  const MOD = IS_MAC ? 'Option' : 'Ctrl';

  console.info(
    '%cExtended Checkbox Selection userscript is running.\n' +
      '%cSelect a range of checkboxes:\n' +
      '%c1. Click (or press Space on) a checkbox normally; its new state is remembered.\n' +
      `2. Hold %c${MOD}%c and click (or press %c${MOD}+Space%c on) another checkbox: every checkbox between them in tab order ` +
      'is set to the remembered state.\n' +
      `3. ${MOD}+click the same checkbox again to toggle the whole range, including both ends; repeat to keep toggling.\n` +
      '4. A normal click on any checkbox starts a new selection. Reloading the page clears it.',
    'font-size: 1.5em; color: white; background-color: black;',
    'font-size: 1.2em;',
    'font-family: system-ui; font-size: 1.2em;',
    'font-weight: bold; font-size: 1.2em;',
    'font-family: system-ui; font-size: 1.2em;',
    'font-weight: bold; font-size: 1.2em;',
    'font-family: system-ui; font-size: 1.2em;',
  );

  const CHECKBOX_SELECTOR = 'input[type="checkbox" i], [role~="checkbox" i]';
  const NATURALLY_FOCUSABLE =
    'a[href], area[href], button, input:not([type="hidden" i]), select, textarea, iframe, summary, ' +
    '[contenteditable]:not([contenteditable="false" i])';

  const recorded = {
    initial: null, // { el, checked }
    lastSecond: null, // checkbox that last received a Ctrl range action; a repeat on it toggles the range
    swallow: null, // { el } while a Ctrl+Space has been handled and its key events must be suppressed
    pendingKey: null, // { el, before, ctrl } for Space keydown on custom checkboxes
    busy: false, // true while this script is dispatching its own clicks
  };

  const isNative = (el) => el.localName === 'input';

  // Returns true, false, or null (mixed/unknown).
  function readState(el) {
    if (isNative(el)) return el.checked;
    const v = (el.getAttribute('aria-checked') || '').trim().toLowerCase();
    if (v === 'true') return true;
    if (v === 'mixed') return null;
    return false;
  }

  function isDisabled(el) {
    return (
      el.matches(':disabled') ||
      el.getAttribute('aria-disabled') === 'true' ||
      el.getAttribute('aria-readonly') === 'true'
    );
  }

  const isSpace = (e) => e.key === ' ' || e.code === 'Space';
  const isPlainCtrl = IS_MAC
    ? (e) => e.altKey && !e.ctrlKey && !e.shiftKey && !e.metaKey
    : (e) => e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey;
  const modHeld = IS_MAC ? (e) => e.altKey : (e) => e.ctrlKey;

  function suppress(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
  }

  // ---- Tab order (see header) ----

  function parseTabindex(el) {
    const raw = el.getAttribute('tabindex');
    return raw !== null && /^\s*[+-]?\d+\s*$/.test(raw) ? parseInt(raw, 10) : null;
  }

  function isVisible(el) {
    if (typeof el.checkVisibility === 'function') {
      return el.checkVisibility({ visibilityProperty: true, checkVisibilityCSS: true });
    }
    return el.getClientRects().length > 0 && getComputedStyle(el).visibility !== 'hidden';
  }

  function isTabbable(el) {
    const tabindex = parseTabindex(el);
    if (tabindex !== null && tabindex < 0) return false;
    if (el.matches(':disabled')) return false;
    if (tabindex === null && !el.matches(NATURALLY_FOCUSABLE)) return false;
    if (el.closest('[inert]')) return false;
    return isVisible(el);
  }

  function collectElements(root, out) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
    for (let n = walker.nextNode(); n; n = walker.nextNode()) {
      out.push(n);
      if (n.shadowRoot) collectElements(n.shadowRoot, out);
    }
    return out;
  }

  function getTabOrder() {
    const tabbable = collectElements(document, []).filter(isTabbable);
    const positive = tabbable.filter((el) => (parseTabindex(el) || 0) > 0);
    const rest = tabbable.filter((el) => !((parseTabindex(el) || 0) > 0));
    positive.sort((a, b) => parseTabindex(a) - parseTabindex(b)); // stable
    return positive.concat(rest);
  }

  // Handles a Ctrl action on `second`. Returns false if it must be treated as a normal click; otherwise
  // schedules the range change (after the current event) and returns true.
  function handleCtrl(second) {
    const init = recorded.initial;
    if (!init || init.checked === null || !init.el.isConnected || init.el === second) return false;
    const toggle = recorded.lastSecond === second;
    let target = init.checked;
    if (toggle) {
      const current = readState(init.el);
      if (current === null) return false;
      target = !current;
    }
    const order = getTabOrder();
    const i1 = order.indexOf(init.el);
    const i2 = order.indexOf(second);
    if (i1 < 0 || i2 < 0) return false;
    const lo = Math.min(i1, i2);
    const hi = Math.max(i1, i2);
    // First application excludes the initial checkbox; a repeat (toggle) includes both ends.
    const slice = toggle ? order.slice(lo, hi + 1) : i1 < i2 ? order.slice(i1 + 1, i2 + 1) : order.slice(i2, i1);
    const list = slice.filter((el) => el.matches(CHECKBOX_SELECTOR));
    recorded.lastSecond = second;
    defer(() => {
      applyRange(list, target);
      if (toggle) {
        // The initial checkbox's new state becomes the state used for later ranges.
        const s = readState(init.el);
        recorded.initial = s === null ? null : { el: init.el, checked: s };
      }
    });
    return true;
  }

  function applyRange(list, target) {
    recorded.busy = true;
    try {
      for (const el of list) {
        if (!el.isConnected || isDisabled(el)) continue;
        if (readState(el) !== target) el.click();
      }
    } finally {
      recorded.busy = false;
    }
  }

  // Runs after the current event (including cancelled default actions, e.g. a native checkbox reverting
  // its pre-toggled state) has finished.
  const defer = (fn) => setTimeout(fn, 0);

  function recordClick(el) {
    recorded.lastSecond = null;
    defer(() => {
      const checked = readState(el);
      recorded.initial = checked === null ? null : { el, checked };
    });
  }

  // ---- Event handling ----

  // Finds the checkbox targeted by a click: the checkbox itself, a descendant of a custom checkbox, or the
  // control of a clicked <label>.
  function findCheckbox(e) {
    for (const node of e.composedPath()) {
      if (!(node instanceof Element)) continue;
      if (node.matches(CHECKBOX_SELECTOR)) return { el: node, viaLabel: false };
      if (node.localName === 'label') {
        const c = node.control;
        return c && c.matches(CHECKBOX_SELECTOR) ? { el: c, viaLabel: true } : null;
      }
    }
    return null;
  }

  function onClick(e) {
    if (recorded.busy || !e.isTrusted) return;
    const hit = findCheckbox(e);
    if (!hit) return;
    const { el, viaLabel } = hit;

    // Click generated by the keyboard activation we already handled (e.g. Space on <button role="checkbox">).
    if (recorded.swallow && recorded.swallow.el === el && e.detail === 0) {
      suppress(e);
      return;
    }

    if (isPlainCtrl(e)) {
      if (handleCtrl(el)) {
        suppress(e);
        return;
      }
    }

    // The label's click is followed by a synthesized click on the control, which is what gets recorded.
    if (!viaLabel) recordClick(el);
  }

  function checkboxFromKeyEvent(e) {
    for (const node of e.composedPath()) {
      if (node instanceof Element && node.matches(CHECKBOX_SELECTOR)) return node;
    }
    return null;
  }

  function onKeyDown(e) {
    if (!e.isTrusted || !isSpace(e)) return;
    const el = checkboxFromKeyEvent(e);
    if (!el) return;

    if (recorded.swallow) {
      if (recorded.swallow.el === el) suppress(e); // auto-repeat while Ctrl+Space is held
      return;
    }

    if (isPlainCtrl(e)) {
      if (handleCtrl(el)) {
        suppress(e);
        recorded.swallow = { el };
        return;
      }
    }

    // Native checkboxes produce a trusted click on Space, handled by onClick.
    recorded.pendingKey = isNative(el) ? null : { el, before: readState(el), ctrl: modHeld(e) };
  }

  function onKeyPress(e) {
    if (e.isTrusted && recorded.swallow && isSpace(e)) suppress(e);
  }

  function onKeyUp(e) {
    if (!e.isTrusted || !isSpace(e)) return;
    if (recorded.swallow) {
      suppress(e);
      // A keyboard-generated click (if any) fires synchronously after keyup, before this runs.
      defer(() => {
        recorded.swallow = null;
      });
      return;
    }
    const pk = recorded.pendingKey;
    recorded.pendingKey = null;
    if (!pk) return;
    defer(() => {
      const now = readState(pk.el);
      // If Ctrl was held and the page ignored the key, nothing was clicked.
      if (pk.ctrl && now === pk.before) return;
      recorded.lastSecond = null;
      recorded.initial = now === null ? null : { el: pk.el, checked: now };
    });
  }

  const opts = { capture: true };
  window.addEventListener('click', onClick, opts);
  window.addEventListener('keydown', onKeyDown, opts);
  window.addEventListener('keypress', onKeyPress, opts);
  window.addEventListener('keyup', onKeyUp, opts);

  // Restoring from the back/forward cache keeps JS state; a restored page counts as a new page load.
  window.addEventListener('pageshow', (e) => {
    if (e.persisted) {
      recorded.initial = null;
      recorded.lastSecond = null;
      recorded.swallow = null;
      recorded.pendingKey = null;
    }
  });
})();
