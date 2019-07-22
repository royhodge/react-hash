// Funcitons to create DOM elements

let el;

class dom {
    clear(el) {
        el.innerHTML = '';
    }

    el(props) {
        let { tag = 'div', id = '', className = '', textContent } = props;
        let el = document.createElement(tag);
        el.id = id;
        el.className = className;
        el.textContent = textContent;
        return el;
    }

    append(props) {
        let { parent, tag, id, className, textContent } = props;
        el = new dom().el({ tag: tag, id: id, className: className, textContent: textContent });
        parent.appendChild(el);
        return el;
    }

    appendTop(props) {
        let { parent, tag, id, className, textContent } = props;
        el = new dom().el({ tag: tag, id: id, className: className, textContent: textContent });
        parent.insertBefore(el, parent.firstChild);
        return el;
    }

    insertBefore(props) {
        let { parent = '', tag = 'div', id = '', cl = '', tx = '', num } = props;
        el = new dom().el(tag, id, cl, tx);
        parent.insertBefore(el, parent.childNodes[num]);
        return el;
    }

    notIncluded(arr, element) {
        if (!(arr.includes(element))) {
            arr.push(element);
        }
    }
}

export default dom;


// const components = {
//     listItem: (parent, data) => {
//         let li = dom.newEl(parent, 'li', '', 'listItem');
//         // Item header
//         let header = dom.newEl(li, 'header', '', 'fileRow pt-2 pb-2 pr-2');
//         // Display filename in hearder
//         let name = dom.newEl(header, 'div', '', 'fileRowLeft');
//         data.DBtype === 'File' ? dom.newEl(name, 'p', '', 'w3-left', data.Filename) : dom.newEl(name, 'p', '', 'w3-left', data.Name);
//         // Display tags  
//         let tags = dom.newEl(header, 'div', '', 'tagDiv');
//         if (data.Tags !== undefined) {
//             dom.createTag(tags, data.Tags);
//         }
//         return li;
//     },
//     pinBtn: (parent, data) => {
//         let btn = dom.newEl(parent, 'button', '', 'fas fa-thumbtack btn border border-dark w3-hover-black ml-2');
//         btn.addEventListener('click', async () => {
//             pinHash(data.Hash);
//         });
//         return btn;
//     },
//     openBtn: (parent, data) => {
//         let btn = dom.newEl(parent, 'button', '', 'fas fa-external-link-alt btn border border-dark w3-hover-green ml-2');
//         btn.addEventListener('click', async (e) => {
//             openIPFS(data.Hash);
//         });
//         return btn;
//     },
//     delete_file_btn: (parent, data, docID, ul, li) => {
//         let btn = dom.newEl(parent, 'button', '', 'fas fa-times btn border border-dark w3-right w3-hover-red ml-2');
//         btn.addEventListener('click', async () => {
//             if (confirm(`Delete ${data.Filename} in collection ${docID}`)) {
//                 await DB.doc(docID).update({
//                     Files: firebase.firestore.FieldValue.arrayRemove(data)
//                 })
//                     .then(() => {
//                         ul.removeChild(li);
//                         console.log("Document successfully deleted!");
//                     })
//             }
//         });
//         return btn;
//     },
//     delete_doc_btn: (parent, data, li) => {
//         let btn = dom.newEl(parent, 'button', '', 'fas fa-times btn border border-dark w3-right w3-hover-red ml-2');
//         btn.addEventListener('click', async () => {
//             if (confirm(`Delete ${data.ID}`)) {
//                 let res = await deleteHash(DB, data.ID);
//                 if (res) {
//                     console.log("Document successfully deleted!");
//                     fileListUL.removeChild(li);
//                     return;
//                 }
//             }
//         });
//         return btn;
//     },
//     update_collection_btn: (parent, data, ul) => {
//         let btn = dom.newEl(parent, 'button', '', 'fas fa-plus btn border border-dark w3-left w3-hover-green ml-2');
//         btn.addEventListener('click', async () => {
//             dom.fadeIn(updateCollectionModal);
//             updateCollectionModalHeader.textContent = `Update ${data.Name}`;
//             let fileNames = data.Files.map(file => file.Filename)
//             dom.createTag(updateCollectionModalBody, fileNames);
//             let save_btn = dom.newEl(updateCollectionModalFooter, 'button', '', 'btn btn-primary', 'Save changes')
//             save_btn.addEventListener('click', () => {
//                 update_collection(data, ul, parent)
//             })
//         });
//         return btn;
//     },
//     action_bar: (parent, data, li) => {
//         let div = dom.newEl(parent, 'div', '', 'list-group-item p-1 w3-amber');
//         components.pinBtn(div, data);
//         components.openBtn(div, data);
//         components.delete_doc_btn(div, data, li);
//         return div;
//     },
//     action_bar1: (parent, data, docID, ul, li) => {
//         let div = dom.newEl(parent, 'div', '', 'list-group-item p-1');
//         components.pinBtn(div, data);
//         components.openBtn(div, data);
//         components.delete_file_btn(div, data, docID, ul, li);
//         return div;
//     },
//     action_bar2: (parent, data, li) => {
//         let div = dom.newEl(parent, 'div', '', 'list-group-item p-1');
//         components.update_collection_btn(div, data, parent.parentElement);
//         components.delete_doc_btn(div, data, li);
//         return div;
//     },



// };

