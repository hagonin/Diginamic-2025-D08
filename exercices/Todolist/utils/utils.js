const tasksUrl = 'http://localhost:3000/tasks';
/**
   * Crée un élément du dom, lui ajoute du texte, le place comme dernier
   * enfant de parent et ajoute un attribut en utilisant le paramètre attributes
   * @param {String} markup_name 
   * @param {domElement} parent 
   * @param {String} text 
   * @param {Object} attributes
   * @returns domElement
   */
export function createMarkup(markupname, parent, text = "", attributes = {}) {
  const markup = document.createElement(markupname);
  markup.textContent = text;
  parent.appendChild(markup);
  console.log(`attributes`, attributes);
  for (let key in attributes) {
    markup.setAttribute(key, attributes[key]);
  }
  return markup;
}

export function loadTasks() {
  return fetch(tasksUrl)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else throw new Error("Pb dans fetch get :" + response.status)
    })
    .then(tasks => {
      console.log(`tasks`, tasks);
      return tasks;
    })
    .catch(error => {
      console.error("Erreur attrapée dans loadTasks", error)
    })
}
export function deleteTask(id) {
  return fetch(tasksUrl + `/${id}`, {
    method: "DELETE"
  })
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else throw new Error("Pb dans fetch delete :" + response.status)
    })
    .then(task => {
      console.log(`task supprimée`, task);
      return task;
    })
    .catch(error => {
      console.error("Erreur attrapée dans deleteTask", error)
    })
}

export function patchTask(id, propertyToUpdate) {
  return fetch(tasksUrl + `/${id}`, {
    method: "PATCH",
    body: JSON.stringify(propertyToUpdate)
  })
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else throw new Error("Pb dans fetch patch :" + response.status)
    })
    .then(task => {
      console.log(`task patchée`, task);
      return task;
    })
    .catch(error => {
      console.error("Erreur attrapée dans patchTask", error)
    })
}
export function postTask(newTask) {
  return fetch(tasksUrl, {
    method: "POST",
    body: JSON.stringify(newTask)
  })
    .then(response => {
      if (response.status == 201) {
        return response.json();
      } else throw new Error("Pb dans fetch patch :" + response.status)
    })
    .then(task => {
      console.log(`task ajoutée`, task);
      return task;
    })
    .catch(error => {
      console.error("Erreur attrapée dans addTask", error)
    })
}