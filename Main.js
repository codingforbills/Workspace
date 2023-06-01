import java.util.Scanner;

class Main { 
    public static void main (String [] args) {

        Scanner in = new Scanner(System.in);

        //Get the player's names
        System.out.println("Player 1, what is your name?");
        String p1 = in.nextLine();
        System.out.println("Player 2, what is your name?");
        String p2 = in.nextLine();

        //3x3 Tic Tac Toe board
        //- empty space
        //x player 1
        //o player 2
        char [][] board = new char[3][3];

        //Fill the board with dashes
        for(int i = 0; i < 3; i++) {
            for(int j = 0; j < 3; j++) {
                board [i] [j] = '-';
            }
        }  
    
    }
    public static void drawBoard (char [] [] board) {
        for(int i =0; i < 3; i++) {
            for(int j = 0; j < 3; j++) {
                System.out.println(board[i][j]);
            }
        }
    }
}
