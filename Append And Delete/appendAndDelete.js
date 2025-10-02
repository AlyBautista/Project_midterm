function appendAndDelete(s, t, k) {
      let commonLength = 0;
    for (let i = 0; i < Math.min(s.length, t.length); i++) {
        if (s[i] === t[i]) {
            commonLength++;
        } else {
            break;
        }
    }

    let operations = (s.length - commonLength) + (t.length - commonLength);

    if (operations > k) {
        return "No";
    } else if ((operations % 2 === k % 2) || (s.length + t.length <= k)) {
        return "Yes";
    } else {
        return "No";
    }
}

