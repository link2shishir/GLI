import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { ListGroup } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function AccordionContainer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<i class="fas fa-angle-down"></i>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Day 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <small>Lession 1</small>
              </ListGroup.Item>
              <ListGroup.Item>
                <small>Lession 2</small>
              </ListGroup.Item>
              <ListGroup.Item>
                <small>Lession 3</small>
              </ListGroup.Item>
              <ListGroup.Item>
                <small>Lession 4</small>
              </ListGroup.Item>
            </ListGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<i class="fas fa-angle-down"></i>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Day 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <small>Lession 1</small>
              </ListGroup.Item>
              <ListGroup.Item>
                <small>Lession 2</small>
              </ListGroup.Item>
              <ListGroup.Item>
                <small>Lession 3</small>
              </ListGroup.Item>
              <ListGroup.Item>
                <small>Lession 4</small>
              </ListGroup.Item>
            </ListGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<i class="fas fa-angle-down"></i>}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Day 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <small>Lession 1</small>
            </ListGroup.Item>
            <ListGroup.Item>
              <small>Lession 2</small>
            </ListGroup.Item>
            <ListGroup.Item>
              <small>Lession 3</small>
            </ListGroup.Item>
            <ListGroup.Item>
              <small>Lession 4</small>
            </ListGroup.Item>
          </ListGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<i class="fas fa-angle-down"></i>}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Day 4</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <small>Lession 1</small>
            </ListGroup.Item>
            <ListGroup.Item>
              <small>Lession 2</small>
            </ListGroup.Item>
            <ListGroup.Item>
              <small>Lession 3</small>
            </ListGroup.Item>
            <ListGroup.Item>
              <small>Lession 4</small>
            </ListGroup.Item>
          </ListGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<i class="fas fa-angle-down"></i>}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Day 5</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <small>Lession 1</small>
            </ListGroup.Item>
            <ListGroup.Item>
              <small>Lession 2</small>
            </ListGroup.Item>
            <ListGroup.Item>
              <small>Lession 3</small>
            </ListGroup.Item>
            <ListGroup.Item>
              <small>Lession 4</small>
            </ListGroup.Item>
          </ListGroup>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
