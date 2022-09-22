import {Button, Grid, Stack, Typography} from "@mui/material";

function Landingpage() {
    return(
        <Grid
            container
            spacing={0}
            rowSpacing={3}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '40vh' }}>
            <Grid item>
                <Typography variant={"h4"}>
                    This is the landing page. If you want to use the service you need to sign in.
                </Typography>
            </Grid>
            <Grid item>
                <Stack direction={"row"} spacing={2}>
                    <Button variant={"contained"} size={"large"} href={"#/login"}>
                        Sign in
                    </Button>
                    <Button variant={"contained"} size={"large"} href={"#/login"}>
                        Sign up
                    </Button>
                </Stack>
            </Grid>


        </Grid>
    )

}

export default Landingpage;