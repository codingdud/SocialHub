import React, { useState } from 'react';
import { TextField, IconButton, Grid } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
function TextAreaInput({handelComment}) {

  const [text, setText] = useState('');
  const handleChange = (event) => {
    setText(event.target.value);
  };
  /* 
  const handelComment = async () => {
    const response = await fetch(`http://localhost:3001/posts/${postId}/comment`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: loggedInUserId,comment:text}),
    });
    const updatedPost = await response.json();
    //console.log(updatedPost)
    dispatch(setPost({ post: updatedPost }));
  }; */
  return (
    <Grid container spacing={2}>
      <Grid item xs={11}>
        <TextField
          value={text}
          onChange={handleChange}
          fullWidth
          id="standard-basic"
          label="Comment"
          variant="standard"
        />
      </Grid>

      <IconButton onClick={()=>{setText('')
        handelComment(text) }} aria-label="delete" size="medium">
        <SendIcon fontSize="inherit" />
      </IconButton>
    </Grid>
  );
}

export default TextAreaInput;
