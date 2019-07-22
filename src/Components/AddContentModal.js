import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    return {
        top: `${20}%`,
        left: `${45}%`,  
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 4),
        outline: 'none',
    },
}));

export default function AddContentModal() {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button type="button" onClick={handleOpen}
                className='btn btn-outline-secondary text-white'
            >Publish Content</button>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}>
                <div style={modalStyle} className={classes.paper}>
                    <div className='d-flex justify-content-between align-items-center p2'>
                        <h2 id="modal-title">IPFS Info</h2>
                        <IconButton aria-label="Profile menu"
                            className='bg-danger'
                            onClick={handleClose}>
                            <Close />
                        </IconButton>
                    </div>
                    <p id="simple-modal-description">
                        lets get that ipfs info!!</p>
                </div>
            </Modal>
        </div>
    );
}