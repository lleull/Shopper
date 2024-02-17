import express from "express";
import bcrypt from "bcrypt";
import UserSchema from "../../Models/UserModel.js";
const router = express.Router();

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  try {
    const UserFound = await UserSchema.find({
      username: username,
    });
    if(UserFound){
      const id = UserFound.map((user) => user._id).toString();
      res.status(200).json({ id: id });
      } else {
        res.status(404).json({
          Error: "No user founds",
        });

    }
    // const hashedpassword = UserFound.map((user) => user.password).toString();
    // console.log(hashedpassword);
    // const id = UserFound.map((user) => user._id).toString();
    // const hash = await bcrypt.compare(password, hashedpassword);
    // console.log(hash);
    // if (hash) {
    //   res.status(200).json({ id: id });
    // } else {
    //   res.status(404).json({
    //     Error: "No user founds",
    //   });
    // }
  } catch (error) {
    res.status(504).json({
      Message: "No User has found",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const userdata = await UserSchema.findById(id);
    if (userdata) {
      res.status(200).send(userdata);
    } else {
      res.status(505).json({
        Messge: "No user has found",
      });
    }
  } catch (error) {
    res.status(404).json({
      Message: "ERROR",
    });
  }
});

router.post("/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  const Userdata = await UserSchema.updateOne(
    { _id: id },
    {
      $set: {
        profile: {
          data: data.image,
          imgType: data.type,
        },
        username: data.username,
        phone: data.phone,
        country: data.country,
        email: data.email,
        work: data.work,
        bio: data.bio,
      },
    }
  );
  try {
    if (Userdata) {
      console.log(data);
      res.status(200).json({
        message: "Uploaded",
      });
    } else console.log("err");
  } catch (error) {
    res.status(505).json({
      error: error,
    });
  }
});
export default router;
