echo "Start github"

git add .

if [ -z "$1" ]
then
    git commit -m "automate save"

else
  git commit -m "$1"

fi

git push

