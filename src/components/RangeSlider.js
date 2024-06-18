import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider({
  value,
  handleChange,
  fetchCourseByRange,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider
        value={value}
        onChangeCommitted={fetchCourseByRange}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        min={100}
        max={500}
      />
    </div>
  );
}
