set -a
source .env
set +a

scp {*.nako3,*.js,*.json,.env} $CLIENT_USER:/home/itojum/dev/client