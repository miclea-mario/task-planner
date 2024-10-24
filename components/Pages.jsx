import { MenuGroup, MenuItem } from '@components';

const Pages = () => {
  return (
    <>
      <MenuItem href="/admin" level="1">
        Dashboard
      </MenuItem>
      <MenuItem href="/examples/todo-list" level="1">
        To Do List
      </MenuItem>
      <MenuItem href="/examples/todo-table" level="1">
        To Do Table
      </MenuItem>
      <MenuItem href="/examples/profile" level="1">
        Profile
      </MenuItem>
      <MenuItem href="/examples/multi-step-form" level="1">
        Multi step Formik form
      </MenuItem>
      <MenuGroup label="Data Display">
        <MenuItem href="/examples/description-lists" level="2">
          Description Lists
        </MenuItem>
        <MenuItem href="/examples/stats" level="2">
          Stats
        </MenuItem>
      </MenuGroup>
      <MenuGroup label="Components">
        <MenuItem href="/examples/buttons" level="2">
          Buttons
        </MenuItem>
        <MenuItem href="/examples/datepicker" level="2">
          Datepicker
        </MenuItem>
        <MenuItem href="/examples/timepicker" level="2">
          Timepicker
        </MenuItem>
        <MenuItem href="/examples/date-of-birth" level="2">
          Date of birth
        </MenuItem>
        <MenuItem href="/examples/dropdown" level="2">
          Dropdown
        </MenuItem>
        <MenuItem href="/examples/async-dropdown" level="2">
          Async Dropdown
        </MenuItem>
        <MenuItem href="/examples/async-multiselect" level="2">
          Async MultiSelect
        </MenuItem>
        <MenuItem href="/examples/combobox" level="2">
          Combobox
        </MenuItem>
        <MenuItem href="/examples/async-combobox" level="2">
          Async Combobox
        </MenuItem>
        <MenuItem href="/examples/autocomplete" level="2">
          Autocomplete
        </MenuItem>
        <MenuItem href="/examples/modals" level="2">
          Modals
        </MenuItem>
        <MenuItem href="/examples/overflow" level="2">
          Overflow
        </MenuItem>
        <MenuItem href="/examples/pills" level="2">
          Pills
        </MenuItem>
        <MenuItem href="/examples/show-more" level="2">
          Show more
        </MenuItem>
        <MenuItem href="/examples/forms" level="2">
          Forms
        </MenuItem>
        <MenuItem href="/examples/formik" level="2">
          Formik forms
        </MenuItem>
        <MenuItem href="/examples/file-upload" level="2">
          File Upload
        </MenuItem>
        <MenuItem href="/examples/formik-array" level="2">
          Formik Array
        </MenuItem>
        <MenuItem href="/examples/translate-all" level="2">
          Translate all
        </MenuItem>
      </MenuGroup>
      <MenuItem href="/login" level="1">
        Login page
      </MenuItem>
      <MenuItem href="/signup" level="1">
        Signup page
      </MenuItem>
      <MenuItem href="/404" level="1">
        404 Page
      </MenuItem>
    </>
  );
};

export default Pages;
