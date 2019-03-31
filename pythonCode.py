import sys
import time

# sends a message every second


def main():
    while True:
        print("Message")
        sys.stdout.flush()
        time.sleep(1)


if __name__ == "__main__":
    main()
