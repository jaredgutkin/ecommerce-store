import { useDispatch, useSelector } from "react-redux";
import { Box, Badge, IconButton } from "@mui/material";
import { PersonOutline, ShoppingBagOutlined, MenuOutlined, SearchOutlined} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  return (
    <Box>
      <Box>
        <Box>
          BAD MEI MEI
        </Box>
        <Box>
          <IconButton>
            <SearchOutlined />
          </IconButton>

          <IconButton>
            <PersonOutline />
          </IconButton>
          <Badge>
            <IconButton>
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>
          <IconButton>
            <MenuOutlined />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;