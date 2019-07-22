


class Buttons {
    base(style) {
        let { parent, className, text } = style;
        let btn = new dom().append({
            parent: parent,
            tag: 'button',
            className: className,
            textContent: text
        })
        return btn;
    }
    open(parent) {
        let newStyle = {
            parent: parent,
            className: 'btn btn-dark',
            text: 'Open'
        }
        return new Buttons().base(newStyle)
    }

    close(parent) {
        let newStyle = {
            parent: parent,
            className: 'btn btn-light',
            text: 'Close'
        }
        return new Buttons().base(newStyle)
    }
}
