import { Card, CardMedia, Typography, Button, CardContent, CardActions } from '@material-ui/core';
import React from 'react';
import {useDispatch} from 'react-redux';
import useStyles from './styles';
import moment from 'moment';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbsUpIcon from '@material-ui/icons/ThumbUp';
import DeleteIcon from '@material-ui/icons/Delete';
import { deletePost, likePost } from '../../../actions/posts';


const Post = ({post, setCurrentId}) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={() => setCurrentId(post._id)}>
                    <MoreHorizIcon fontSize='medium' />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
                <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography variant="body2" color='textSecondary' component="p">{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
                    <ThumbsUpIcon fontSize='small'/> Like {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize='small'/> Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default Post;