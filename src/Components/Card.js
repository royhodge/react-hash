// Complex Interaction
// On desktop, card content can expand.

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles(theme => ({
    card: {
        width: '90%',
        marginBottom: '1em'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9,
        src: ''
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[300],
    },
}));

export default function ContentCard({ data, index }) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    function handleExpandClick() {
        setExpanded(!expanded);
    }

    return (
        <Card key={Math.random()}
            className='card round shadow-lg mt-2'
            style={{
                width: '90%'
            }}>
            <CardHeader
                key={Math.random()}
                avatar={
                    <Avatar aria-label={data.Filename ? data.Filename : data.Name} className={classes.avatar}>
                        {data.Author.slice(0, 2)}
                    </Avatar>}

                action={
                    <IconButton aria-label="Settings"
                        onClick={() => {
                            alert('Edit content coming soon.')
                        }}>
                        <MoreVertIcon />
                    </IconButton>
                }
                title={data.Filename ? data.Filename : data.Name}
                subheader={data.Date}
            />
            {/* <CardMedia
                className={classes.media}
                image={classes.media.src}
                title="Random pic"
            /> */}
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {data.Description ? data.Description : 'No description'}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="Add to favorites"
                onClick={()=> {
                    alert('Favorite content coming soon.')
                }}>
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="Share"
                onClick={()=> {
                    alert('Share content coming soon.')
                }}>
                    <ShareIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="Show more">
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    {/* <ul className="container bg-light d-flex flex-column align-items-center">
                        {this.state.data.map((item, index) => {
                            return (<ContentCard data={item} index={index} />)
                        })}
                    </ul> */}
                    <Typography variant="body1" color="textSecondary" component="p">
                        {data.Author}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                        {data.Type}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                        {data.Size}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                        {data.Hash}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}