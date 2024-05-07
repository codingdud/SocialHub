import { Box } from "@mui/material";
import {s3user} from '../links'

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`${s3user}/${image}`}
      />
    </Box>
  );
};

export default UserImage;
