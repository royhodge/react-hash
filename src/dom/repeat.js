// 
// 

class Repeat extends dom {
    createTag(props) {
        let { parent, array } = props;
        array.forEach((val) => {
            el = this.append({ parent: parent, className: 'badge bg-dark text-white border border-white pb-2 pt-1', text: val });
            return el;
        });
    }

    newOp(props) {
        let { parent, array } = props;
        array.forEach((val) => {
            el = this.append({ parent: parent, tag: 'option', text: val });
            el.value = val;
            return el;
        });
    }

    newLi(props) {
        let { parent, array, className } = props;
        array.forEach((val) => {
            el = this.append({ parent: parent, tag: 'li', className: className, text: val });
            return el;
        });
    }
    newP(props) {
        let { parent, array, className } = props;
        array.forEach((val) => {
            el = this.append({ parent: parent, tag: 'p', className: className, text: val });
            return el;
        });
    }
    newDropdownItem(par, arr) {
        arr.forEach((val) => {
            el = this.append({ parent: parent, tag: 'a', className: 'dropdown-item', text: val });
            return el;
        });
    }
}
