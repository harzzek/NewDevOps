import {
    Paper,
    Box,
    Typography, Button
} from "@mui/material";
import * as React from "react";

const trial = [
    {
        Company: "Company name goes here",
        TrialName: "Name of the trial",
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At consectetur lorem donec massa sapien faucibus et molestie. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Nec nam aliquam sem et tortor consequat id porta nibh. Id diam vel quam elementum pulvinar etiam non quam. Vulputate sapien nec sagittis aliquam malesuada. Vulputate ut pharetra sit amet aliquam id. Mauris pharetra et ultrices neque ornare aenean euismod. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Pellentesque sit amet porttitor eget dolor morbi non arcu. Habitant morbi tristique senectus et netus et malesuada. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Non blandit massa enim nec dui nunc mattis. Bibendum arcu vitae elementum curabitur vitae. Amet porttitor eget dolor morbi non arcu risus quis. Sagittis aliquam malesuada bibendum arcu vitae elementum. Libero nunc consequat interdum varius sit amet mattis vulputate. Pulvinar pellentesque habitant morbi tristique. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien.\n" +
            "\n" +
            "Lacus viverra vitae congue eu consequat ac felis donec. Imperdiet sed euismod nisi porta. Nec feugiat nisl pretium fusce. Consequat semper viverra nam libero justo laoreet sit amet. Amet facilisis magna etiam tempor. Erat nam at lectus urna duis. A lacus vestibulum sed arcu. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Sit amet dictum sit amet. Et malesuada fames ac turpis egestas sed tempus. Ut venenatis tellus in metus vulputate eu. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Tincidunt arcu non sodales neque sodales. Et malesuada fames ac turpis egestas maecenas. Nunc eget lorem dolor sed viverra ipsum nunc aliquet. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus. Pretium fusce id velit ut. Sodales ut etiam sit amet nisl purus.\n" +
            "\n" +
            "Dictum fusce ut placerat orci nulla pellentesque dignissim enim. Et malesuada fames ac turpis egestas maecenas pharetra convallis. Viverra suspendisse potenti nullam ac tortor vitae. Auctor eu augue ut lectus arcu bibendum at varius. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Nec feugiat nisl pretium fusce id velit ut. Sed risus ultricies tristique nulla aliquet enim tortor at auctor. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Purus in mollis nunc sed id. Tortor aliquam nulla facilisi cras fermentum odio. Egestas congue quisque egestas diam in arcu cursus euismod. Id neque aliquam vestibulum morbi blandit cursus. Consequat semper viverra nam libero."
    },
]


function TrialSignup() {

    return(
        <div>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 6,
                        width: '100%',
                        height: '100%',
                    },
                }}
            >
                <Paper elevation={3}>
                    <div>
                        {trial.map(trial =>(
                            <div>
                                <Typography variant="h4" component="div" margin={2}>
                                    {trial.Company}
                                </Typography>
                                <Typography variant="h5" marginX={4}>
                                    {trial.TrialName}
                                </Typography>
                                <Typography variant="body1" marginX={7} marginY={2}>
                                    filler text goes here:
                                </Typography>
                                <Typography variant="body1" display="block" marginX={7} marginY={2} >
                                    {trial.Description}
                                </Typography>
                            </div>
                        ))}
                            <div align="right">
                                <Button
                                    variant="contained"
                                    sx={{ mt: 2, mb: 2, mr: 6}}
                                    size="large"
                                    color="success"
                                >
                                    Sign up for trial
                                </Button>
                            </div>
                        </div>
                </Paper>
            </Box>
        </div>
    )

}


export default TrialSignup;