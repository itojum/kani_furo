set -a
source .env
set +a

scp waterTemperature.nako3 $CLIENT_USER:/home/itojum/dev/client
