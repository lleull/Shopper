import  express from "express";
import UserSchema from "../../Models/UserModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const userDatas = req.body;
    console.log(userDatas);
    // const password = userDatas.password;
    // const salt = bcrypt.genSaltSync(10);
    // const hashedpassowrd = await bcrypt.hash(password, salt);

    const UserFound = new UserSchema({
      email: userDatas.email,
      country: userDatas.country,
      password: userDatas.password,
      phone: userDatas.phone,
      username: userDatas.username,
    });

    const Adduser = await UserFound.save();

    if (Adduser) {
      res.status(200).json(Adduser);
    } else {
      res.status(404).json({ Error: "Registration has falled" });
    }
  } catch (error) {
    res.status(505).json({
      error: "Error while creating the Register App",
    });
    console.log(error);
  }
});

router.get("/", async (req, res) => {
  const data = await UserSchema.find();

  try {
    res.status(200).json(data);
  } catch (error) {
    res.status(404);
  }
});

router.post("/follow/:id", async (req, res) => {
  const id = req.params.id;

  const Username = req.body.username;
  const userid = req.body.userid;

  try {
    const findbyuser = await UserSchema.updateOne(
      { username: Username },
      { $addToSet: { Following: id } }
    );
    const follower = await UserSchema.updateOne(
      { _id: id },
      {
        $addToSet: {
          Followers: userid,
        },
      }
    );
    if (findbyuser && follower) {
      res.status(200).json({
        Message: "Followe Succefully",
      });
    }
  } catch (error) {
    res.status(505).json({
      Error,
    });
    console.log(error);
  }
});

router.get("/friends/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const Theuser = await UserSchema.findById(id);
    if (Theuser) {
      const ids = Theuser;
    }
  } catch (error) {}
});

router.get("/single/:id", async (req, res) => {
  const username = req.params.id;
  console.log(username);

  try {
    const Finduser = await UserSchema.findOne({
      username: username,
    });
    if (Finduser) {
      const user = Finduser;
      const { password, ...otherdata } = user;
      res.status(200).send(otherdata);
    } else {
      res.status(500).json("No data has Found");
    }
  } catch (error) {}
});

export default router;
