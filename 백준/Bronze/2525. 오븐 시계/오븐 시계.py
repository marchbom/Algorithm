h, m = map(int, input().split())
over = int(input())

if m + over < 60:
    m = m + over
else:
    h += (m + over) // 60
    m = (m+ over) % 60
    if h >= 24:
        h -= 24

print(h, m)