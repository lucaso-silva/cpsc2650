import './App.css'
import task_2_img from './assets/task2.png';
import task_3_img from './assets/task3.png';
import task_7_img from './assets/task7.png';

function App() {
  return (
      <>
          <h1>Lab 1: Git + Vite Setup</h1>
          <section>
              <h2>Task 2: Git Config</h2>
              <ul>
                  <li>
                      <p>What does running git config --global user.name/email do?</p>
                      <p>This command sets globally the user name and email in Git, so these values will apply to all Git repositories for this user.</p>
                  </li>
                  <li>
                      <p>Where are these values stored?</p>
                      <p>They are stored in the git configuration file</p>
                  </li>
                  <li>
                      <p>What does git config --list return?</p>
                      <p>It returns all the Git config settings</p>
                      <img src={task_2_img} className="task_img" alt="task 2 screenshot"/>
                  </li>
                  <li>
                      <p>How can you tell if Git is already initialized in a project?</p>
                      <p>We can check if Git is initialized by the command git status.</p>
                  </li>
              </ul>
          </section>
          <section>
              <h2>Task 3: Commit Messages & Log</h2>
              <ul>
                  <li>
                      <p>Why should commit messages be written in present tense?</p>
                      <p>By convention commit messages are in the present tense because this encourages a focus on intent, describing what the commit does, not what it did.</p>
                  </li>
                  <li>
                      <p>Paste the output of git log --oneline:</p>
                      <img src={task_3_img} className="task_img" alt="task 3 screenshot"/>
                  </li>
              </ul>
          </section>
          <section>
          <h2>Task 4: git diff</h2>
              <ul>
                  <li>
                      <p>What does git diff show?</p>
                      <p>Git diff displays the lines changed between the working directory and the staging area.</p>
                  </li>
                  <li>
                      <p>What do the + and - symbols mean?</p>
                      <p>The + indicates the parts that were added, and - indicates the lines that were deleted</p>
                  </li>
              </ul>
          </section>
          <section>
              <h2>Task 5: git restore</h2>
              <ul>
                  <li>
                      <p>What does git restore do?</p>
                      <p>It discards changes in the working directory and restores files to the last committed version.</p>
                  </li>
              </ul>
          </section>
          <section>
              <h2>Task 6: git push -u</h2>
              <ul>
                  <li>
                      <p>What does the -u flag do in the git push -u origin main?</p>
                      <p>The -u flag sets up tracking so that future pushes and pulls can be done with just git push or git pull.</p>
                  </li>
                  <li>
                      <p>GitHub repo link:</p>
                      <a href="https://github.com/lucaso-silva/cpsc2650.git" target="_blank">https://github.com/lucaso-silva/cpsc2650.git</a>
                  </li>
              </ul>
          </section>
          <section>
              <h2>Task 7: Screenshot of git log</h2>
              <ul>
                  <li>
                      <p>Include your screenshot here:</p>
                      <img src={task_7_img} className="task_img" alt="task 7 screenshot" />
                  </li>
              </ul>
          </section>
          <section>
              <h2>Task 8: .gitignore</h2>
              <ul>
                  <li>
                      <p>What does the .gitignore file do?</p>
                      <p>It tells Git which files and folders to ignore (not track), keeping log files, temporary files, build artefacts or personal files out of the repository.</p>
                  </li>
                  <li>
                      <p>Name two things that are ignored in this project:</p>
                      <ol>
                          <li>node_modules</li>
                          <li>dist folder</li>
                      </ol>
                  </li>
              </ul>
          </section>
      </>
  )
}

export default App
