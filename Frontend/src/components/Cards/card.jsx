import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import "./card.css";
import { Chip } from "@mui/material";

export default function MediaCard(props) {
  const navigate = useNavigate();
  return (
    // add onclick
    <Card className="card" key={props.key} sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.ProjectName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Chip label={props.type} />
        </Typography>
      </CardContent>
      <CardActions>
        <Chip label={props.status} color="primary" />
      </CardActions>
      <Button
        onClick={() => {
          navigate(`/project/${props.id}`);
        }}
      >
        View Details
      </Button>
    </Card>
  );
}
