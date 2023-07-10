import { makeStyles } from '@material-ui/core/styles';

const landingPageStyles = makeStyles((theme) => ({
    container: {
        maxWidth: "lg",
    },
    select: {
        marginTop: theme.spacing(2),
        minWidth: 120,
    },
}));

export default landingPageStyles;