# Changelog

All changes to OrcaUI including new features, updates, and removals are documented here.


## [v1.0.4] - 2025-07-08

### Distribution Files
- **JS**: https://unpkg.com/orcaui@1.0.4/dist/js/orca.js
- **CSS**: https://unpkg.com/orcaui@1.0.4/dist/css/orca.css
- **Zip**: https://unpkg.com/orcaui@1.0.4/dist.zip

### Changes

#### Fixed
- Fixed `Range` component's `reset` method not working.
- Changed `Range` library parameter from `aixs` to `flow` with values `h/v`.
- Adjusted max height for `Popup` and `Dialog` libraries to reduce scrollbar usage.
- Modified `Datetime` library to support US date format and milliseconds.
- Changed `Datetime` library's default output format to `YYY-MM-DD`.
- Added new output format properties to `Datetime`: d, ddd, dddd, H, A, a, W, WW, w, ww.
- Updated `Datetime` parameter `weekStart` to accept ISO or USA values.
- Fixed incorrect year/month dropdown height in mobile view for `Datetime`.
- Improved BC/AD date handling for `Datetime` (e.g., 0000-12-12 now shows "1 BC").
- Fixed toolbox color issue in `Select` component.
- Resolved `Search` component error when using `shape` property.
- Fixed `Search` component issues with `shape`, `notable`, and `size` properties.

#### Added
- New functions: `dateTools.getIsoDate`, `dateTools.getYearWeek`, `dateTools.get12Hour`.
- Added rounded corners to `Drawer` component when placement=bottom.
- New `Datetime` parameter: `headFormat` (accepts ISO/USA).
- Changed default `separator` in `Datetime` to ";" for better US/EU compatibility.
- Added `width` parameter to `Progress` library (distinct from `size`).

#### Removed
- Removed deprecated `dateTools.toSlash` function.
- Replaced `_field` style class with `oc-field` node naming.


## [v1.0.3] - 2025-07-01

### Distribution Files
- **JS**: https://unpkg.com/orcaui@1.0.3/dist/js/orca.js
- **CSS**: https://unpkg.com/orcaui@1.0.3/dist/css/orca.css
- **Zip**: https://unpkg.com/orcaui@1.0.3/dist.zip

### Changes

#### Fixed
- Modified `Format` component: Pinyin (phonetic notation) will not be split if it contains no English commas or spaces
- Updated `Btn` component: Added `selected` property
- Fixed text error in `status.info` of `en-US` language pack
- Renamed `inverted` to `flipped` in `Step` and `Buoy` components (clarified: `inverted` for color reversal, `flipped` for node flipping)
- Revised several properties of `Icon` component and rewrote its CSS
- Changed `File` component's `lang.multi` property to `lang.hasFiles`
- Adjusted `File` component styles: Increased line height for multiple file selection to prevent character clipping
- Fixed `Valid` library issue where custom form field validation initially failed - now uses debounce validation to ensure checks occur after all operations complete
- Fixed `Upload` library: Prevented duplicate event bubbling from built-in `file` and `text` native components by stopping propagation of `change` and `input` events
- Updated `toLocalTime` function to accept more date text formats
- Fixed `Tags` library: `updateCont` method now correctly triggers `output` event
- Fixed `validTools.parseLength` function: Added `value` and `label` parameters to pass original values and aliases
- Fixed `validTools.listenSubmit` function to properly listen for `submit` events

#### Added
- Modified Buoy styles: Added `--_buoy-r` CSS variable
- Added new language pack property `form.filesLabel` and renamed `form.fileMulti` to `hasFiles`
- Updated `regExps`: Added credit card and UUID validation patterns

#### Removed
- Removed CSS variable `--_c-divide`


## [v1.0.2] - 2025-06-23

### Distribution Files
- **JS**: https://unpkg.com/orcaui@1.0.2/dist/js/orca.js
- **CSS**: https://unpkg.com/orcaui@1.0.2/dist/css/orca.css
- **Zip**: https://unpkg.com/orcaui@1.0.2/dist.zip

### Changes

#### Fixed
- Optimized iconfont by keeping only framework-essential icons, reducing packed CSS by **20KB**  
- Refactored CSS into modular files for granular imports  
- Updated components to support CSS tree-shaking through proper file references

#### Added
- No new features in this release

#### Removed
- Toggle component and associated styles deprecated


## [v1.0.1] - 2025-05-24

### Distribution Files
- **JS**: [orca.js](https://unpkg.com/orcaui@1.0.1/dist/js/orca.js)
- **CSS**: [orca.css](https://unpkg.com/orcaui@1.0.1/dist/css/orca.css)
- **Zip**: [Full package](https://unpkg.com/orcaui@1.0.1/dist.zip)

### Changes

#### Fixed
- Added product introduction.

#### Added
- null

#### Removed
- null


## [v1.0.0] - 2025-05-24

### Distribution Files
- **JS**: [orca.js](https://unpkg.com/orcaui@1.0.0/dist/js/orca.js)
- **CSS**: [orca.css](https://unpkg.com/orcaui@1.0.0/dist/css/orca.css)
- **Zip**: [Full package](https://unpkg.com/orcaui@1.0.0/dist.zip)

### Changes

#### Fixed
- null

#### Added
- Release the first version.

#### Removed
- null
