import os

for dir_name in os.listdir("."):
    if "." not in dir_name and os.path.isdir(dir_name):
        im_name = dir_name.strip().split("(")[0] +".png" # clean name
        src = os.path.join(dir_name, "image_1.png")
        dst = os.path.join(".", im_name)
        if os.path.exists(src):
            sp.call(["mv", src, dst])
        else:
            im_name = dir_name.strip().split("(")[0] +".jpg" # clean name
            src = os.path.join(dir_name, "image_1.jpg")
            dst = os.path.join(".", im_name)
            if os.path.exists(src):
                sp.call(["mv", src, dst])
