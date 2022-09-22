import {Button, Grid, Typography} from "@mui/material";

function Homepage() {
    return(
        <div>
            <Grid
                container
                spacing={0}
                rowSpacing={2}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '40vh' }}>
                <Grid item xs={3}>
                    <Typography variant={"h5"}>
                        This is your homepage. Here you can go to your settings or see clinical trials to attend.
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography>
                        Here you can see the trials you can attend
                    </Typography>
                </Grid>
                <Grid>
                    <Button href={"#/trials"} variant={"contained"} sx={{paddingRight:7, paddingLeft:7, fontSize:20}}>
                        Trials
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Typography>
                        Here you can change your settings and put in new data for your conditions.
                    </Typography>
                </Grid>
                <Grid>
                    <Button href={"#/settings"} variant={"outlined"} sx={{paddingRight:7, paddingLeft:7, fontSize:20}}>
                        Settings
                    </Button>
                </Grid>


            </Grid>
        </div>
    )

}

export default Homepage;