import java.util.Scanner;
class wordsearch{
    static String getReverseString(String kolom){
        String kolombaru = "";
        for (int i = kolom.length()-1; i >= 0; i--) {
            kolombaru += kolom.charAt(i);
        }
        return kolombaru;
    }
    static int getWordFound(String word, String W){
        String cek;
        int innerCounter = 0;
        for (int i = 0; i <= word.length()-W.length(); i++) {
            cek = "";
            for (int j = i; j < i+W.length(); j++) {
                cek += word.charAt(j);
            }
            if (cek.equals(W)) {
                innerCounter++;
            }
        }
        return innerCounter;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        int[] count = new int[T];
        int i, j, k, l;
        String kolom;
        words[] arraywords = new words[T];
        for (i = 0; i < T; i++) {
            int N = sc.nextInt();
            int M = sc.nextInt();
            arraywords[i] = new words();
            arraywords[i].word = new String[N];
            for (j = 0; j < N; j++) {
                arraywords[i].word[j]=sc.next();
            }
            String W = sc.next();
            for (j = 0; j < N; j++) {
                //horizontal
                kolom = arraywords[i].word[j];
                count[i] += getWordFound(kolom, W);
                kolom = getReverseString(kolom);
                count[i] += getWordFound(kolom, W);

                //diagonal sisi kiri > tenggara
                kolom = "";
                k = j;
                while (k < N && k-j < M) {
                    kolom += arraywords[i].word[k].charAt(k - j);
                    k++;
                }
                count[i] += getWordFound(kolom, W);
                kolom = getReverseString(kolom);
                count[i] += getWordFound(kolom, W);

                // diagonal sisi kiri > timur laut
                kolom = "";
                k = j;
                l = 0;
                while (k >= 0 && l < M) {
                    kolom += arraywords[i].word[k].charAt(l);
                    k--;
                    l++;
                }
                count[i] += getWordFound(kolom, W);
                kolom = getReverseString(kolom);
                count[i] += getWordFound(kolom, W);
            }

            for (j = 0; j < M; j++) {
                // vertikal
                kolom = "";
                for (k = 0; k < N; k++) {
                    kolom += arraywords[i].word[k].charAt(j);
                }
                count[i] += getWordFound(kolom, W);
                kolom = getReverseString(kolom);
                count[i] += getWordFound(kolom, W);
            }

            for (j = 1; j < M; j++) {
                // diagonal sisi atas > tenggara
                kolom = "";
                k = j;
                while (k-j < N && k < M) {
                    kolom += arraywords[i].word[k-j].charAt(k);
                    k++;
                }
                count[i] += getWordFound(kolom, W);
                kolom = getReverseString(kolom);
                count[i] += getWordFound(kolom, W);

                // diagonal sisi bawah > timur laut
                kolom = "";
                l = j;
                k = N-1;
                while (k >= 0 && l < M) {
                    kolom += arraywords[i].word[k].charAt(l);
                    k--;
                    l++;
                }
                count[i] += getWordFound(kolom, W);
                kolom = getReverseString(kolom);
                count[i] += getWordFound(kolom, W);
            }
        }
        for (i = 0; i < T; i++) {
            System.out.println("Case "+(i+1)+": "+count[i]);
        }
    }
}
class words{
    String[] word;
}