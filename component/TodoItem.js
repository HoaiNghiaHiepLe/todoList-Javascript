import html from "../core.js";
import { connect } from "../store.js";

function TodoItem({ item, index, editIndex }) {
  return html` <li
    class="${item.completed && "completed"} ${editIndex === index && "editing"}"
  >
    <div class="view">
      <input
        class="toggle"
        type="checkbox"
        ${item.completed && `checked`}
        onchange="dispatch('toggle', ${index})"
      />
      <label ondblclick="dispatch('startEdit', ${index})">${item.title}</label>
      <button class="destroy" onclick="dispatch('delete', ${index})"></button>
    </div>
    <input
      class="edit"
      value="${item.title}"
      onkeyup="event.keyCode === 13 && dispatch('endEdit', this.value.trim()) || event.keyCode === 27 && dispatch('cancelEdit')"
      onblur="dispatch('endEdit', this.value.trim())"></input>
  </li>`;
}

export default connect()(TodoItem);
