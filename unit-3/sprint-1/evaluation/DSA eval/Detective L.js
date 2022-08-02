// L is a famous detective in the anime series Death Note and is known for solving puzzles and riddles for investigation.

// There is a security breach in Tokyo Police and they want L's help.He is given the security matrix of dimension [nxm] by the police.

// L decodes that his rival Light has breached the security matrix and has followed a specific way of accessing the matrix. Below is the image of its traversal. Surprisingly, the traversal is in the L shape.

// l.png

// He is busy with some other clients and he knows you who can code this traversal and print the traversal in the single line.

// Can you print the traversal?


function Lmatrix(mat, n, m) {


    let right = 0;
    let up = mat.length - 1;
    let more = 0;
    let count = 0;

    let bag = "";
    while (count < m) {
        for (let i = 0; i <= up; i++) {
            if (mat[i][right] !== undefined) {
                bag = bag + (mat[i][right]) + " ";
            }
        }

        right++
        more++
        for (let j = more; j < m; j++) {
            if (mat[up][j] !== undefined) {
                bag = bag + mat[up][j] + " ";
            }
        }
        up--
        count++
    }
    //   console.log(count + "ihug");
    console.log(bag);
}